'use strict';
var EventEmitter = require('event-emitter');

function Shape() {
  EventEmitter(this)
}

module.exports = Shape;