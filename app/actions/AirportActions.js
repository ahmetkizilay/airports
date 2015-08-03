"use strict";
var AirportDispatcher = require("../dispatcher/AirportDispatcher");
var AirportConstants = require('../constants/AirportConstants');

var AirportActions = {
  select: function (id) {
    AirportDispatcher.dispatch({
      actionType: AirportConstants.AIRPORT_SELECT
      id: id
    });
  }
};

module.exports = AirportActions;
