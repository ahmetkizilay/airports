"use strict";

var React = require("react");
var AirportMap = require("./AirportMap.jsx");
var AirportDetail = require("./AirportDetail.jsx");
var AirportStore = require("../stores/AirportStore.js");

var AirportApp = React.createClass({
  getInitialState: function() {
    return {
      airports: AirportStore.getAll(),
      selected: 1
    };
  },
  render: function() {
    var detail;
    if (this.state.selected) {
      detail = (
        <AirportDetail airport={this.state.airports[this.state.selected]} />
      );
    }
    return (
      <div className="app-container">
        <AirportMap airports={this.state.airports}/>
        {detail}
      </div>
    );
  }
});

module.exports = AirportApp;
