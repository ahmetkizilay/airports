"use strict";

var React = require("react");

var AirportDetail = React.createClass({
  displayName: "Airport Detail",

  propTypes: {
    airport: React.PropTypes.string.isRequired
  },

  render: function() {
    var airport = this.props.airport;
    return (
      <div className="detail">
        <span>{airport.name}</span>
      </div>
    );
  }
});

module.exports = AirportDetail;
