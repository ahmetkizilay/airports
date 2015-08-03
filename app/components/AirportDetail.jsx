"use strict";

var React = require("react");

var AirportDetail = React.createClass({
  render: function() {
    return (
      <div className="detail">
        <span>{this.props.airport.name}</span>
      </div>
    );
  }
});

module.exports = AirportDetail;
