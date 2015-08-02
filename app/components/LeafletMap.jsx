/* global L:false */
"use strict";

var React = require("react");
var AirportStore = require("../stores/AirportStore.js");

var map;
var LeafletMap = React.createClass({
  displayName: "LeafletMap",
  getInitialState: function() {
    return {
      airports: AirportStore.getAll()
    };
  },

  componentDidMount: function() {
    var airports = this.state.airports;

    map = L.map("map").setView(airports[0].coordinates, 6);
    map.zoomControl.setPosition("bottomright");
    // L.control.zoom({
    //   position: "bottomright"
    // }).addTo(map);

    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWhtZXRraXppbGF5IiwiYSI6IjljZDljZDAxYmExY2VlZjlhZjk4M2VlMDgxMjc5MWFmIn0.bcWcBTBeqY7qkTfEuIEeqg", {
      maxZoom: 12,
      attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, " +
        "<a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, " +
        "Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
      id: "ahmetkizilay.n2iif6jo"
    }).addTo(map);

    airports.forEach(function (airport) {
      var p = L.popup({
        closeButton: false
      })
      .setContent(airport.name);

      L.marker(airport.coordinates)
        .addTo(map)
        .bindPopup(p)
        .on("mouseover", function() {
          this.openPopup();
        })
        .on("mouseout", function() {
          this.closePopup();
        })
        .on("click", function() {
          console.log("clicked on me");
        });
    });
  },

  render: function() {
    return (
      <div id="map" className="map-container"></div>
    );
  }
});

module.exports = LeafletMap;
