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

////////////////////////////////////////////////////////////////////////////////
// AMQP Domains
////////////////////////////////////////////////////////////////////////////////

var _domains = {

    "ClassId" : 
        { "type" : "short-int",
          "asserts" : [ ]
        }, 
    "ConsumerTag" : 
        { "type" : "short-string",
          "asserts" : [ ]
        }, 
    "DeliveryTag" : 
        { "type" : "long-long-int",
          "asserts" : [ ]
        }, 
    "ExchangeName" : 
        { "type" : "short-string",
          "asserts" : [ ]
        }, 
    "MethodId" : 
        { "type" : "short-int",
          "asserts" : [ ]
        }, 
    "NoAck" : 
        { "type" : "bit",
          "asserts" : [ ]
        }, 
    "NoLocal" : 
        { "type" : "bit",
          "asserts" : [ ]
        }, 
    "NoWait" : 
        { "type" : "bit",
          "asserts" : [ ]
        }, 
    "Path" : 
        { "type" : "short-string",
          "asserts" : [ ]
        }, 
    "PeerProperties" : 
        { "type" : "field-table",
          "asserts" : [ ]
        }, 
    "QueueName" : 
        { "type" : "short-string",
          "asserts" : [ ]
        }, 
    "Redelivered" : 
        { "type" : "bit",
          "asserts" : [ ]
        }, 
    "MessageCount" : 
        { "type" : "long-int",
          "asserts" : [ ]
        }, 
    "ReplyCode" : 
        { "type" : "short-int",
          "asserts" : [ ]
        }, 
    "ReplyText" : 
        { "type" : "short-string",
          "asserts" : [ ]
        }, 
    "Bit" : 
        { "type" : "bit",
          "asserts" : [ ]
        }, 
    "Octet" : 
        { "type" : "boolean",
          "asserts" : [ ]
        }, 
    "Short" : 
        { "type" : "short-int",
          "asserts" : [ ]
        }, 
    "Long" : 
        { "type" : "long-int",
          "asserts" : [ ]
        }, 
    "Longlong" : 
        { "type" : "long-long-int",
          "asserts" : [ ]
        }, 
    "Shortstr" : 
        { "type" : "short-string",
          "asserts" : [ ]
        }, 
    "Longstr" : 
        { "type" : "long-string",
          "asserts" : [ ]
        }, 
    "Timestamp" : 
        { "type" : "timestamp",
          "asserts" : [ ]
        }, 
    "Table" : 
        { "type" : "field-table",
          "asserts" : [ ]
        }
};
