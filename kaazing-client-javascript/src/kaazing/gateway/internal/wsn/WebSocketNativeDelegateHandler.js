/**
 * Copyright (c) 2007-2014 Kaazing Corporation. All rights reserved.
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


/**
 * @private
 */
var WebSocketNativeDelegateHandler = (function() {
			;;;var CLASS_NAME = "WebSocketNativeDelegateHandler";
            ;;;var LOG = Logger.getLogger(CLASS_NAME);
        
        var WebSocketNativeDelegateHandler = function() {
            ;;;LOG.finest(CLASS_NAME, "<init>");
		};
		
        var $prototype = WebSocketNativeDelegateHandler.prototype = new WebSocketHandlerAdapter();
        
		$prototype.processConnect = function(channel, uri, protocol) {
			;;;LOG.finest(CLASS_NAME, "connect", channel);
			if (channel.readyState == WebSocket.CLOSED) {
				throw new Error("WebSocket is already closed");
			}
            if (channel._delegate == null) {
                var delegate = new WebSocketNativeProxy();
                delegate.parent = channel;
                channel._delegate = delegate;
                setDelegate(delegate, this);
            }
			channel._delegate.connect(uri.toString(), protocol);
		}

		$prototype.processTextMessage = function(channel, text) {
			;;;LOG.finest(CLASS_NAME, "processTextMessage", channel);
			if (channel._delegate.readyState() == WebSocket.OPEN) {
				channel._delegate.send(text);
			} else {
				throw new Error("WebSocket is already closed");
			}
        }

		$prototype.processBinaryMessage = function(channel, obj) {
			;;;LOG.finest(CLASS_NAME, "processBinaryMessage", channel);
			if (channel._delegate.readyState() == WebSocket.OPEN) {
				channel._delegate.send(obj);
			} else {
				throw new Error("WebSocket is already closed");
			}
		}

        $prototype.processClose = function(channel, code, reason) {
            ;;;LOG.finest(CLASS_NAME, "close", channel);
            try {
                channel._delegate.close(code, reason);
            } catch (e) {
                // ignore exceptions thrown by older WebSocket impls in browsers
                ;;;LOG.finest(CLASS_NAME, "processClose exception: ", e);
            }
        }

        $prototype.setIdleTimeout = function(channel, timeout) {
            ;;;LOG.finest(CLASS_NAME, "idleTimeout", channel);
            try {
                channel._delegate.setIdleTimeout(timeout);
            } catch (e) {
                // ignore exceptions thrown by older WebSocket impls in browsers
                ;;;LOG.finest(CLASS_NAME, "setIdleTimeout exception: ", e);
            }
        }

		var setDelegate = function(nextHandler, $this) {
			var listener = new WebSocketHandlerListener($this);
			nextHandler.setListener(listener);
		}

	return WebSocketNativeDelegateHandler;
})();

