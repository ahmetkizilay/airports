"use strict";

var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;
var AirportDispatcher = require("../dispatcher/AirportDispatcher.js");
var AirportConstants = require("../constants/AirportConstants.js");

var data = [
  {
    id: 1,
    name: "İstanbul Atatürk Havalimanı ",
    coordinates: [ 40.976111, 28.813889 ]
  },
  {
    id: 2,
    name: "Ankara Esenboğa Havalimanı",
    coordinates: [ 40.119066, 32.983613 ]
  },
  {
    id: 3,
    name: "İzmir Adnan Menderes Havalimanı",
    coordinates: [ 38.289167, 27.155000 ]
  },
  {
    id: 4,
    name: "Antalya Havalimanı",
    coordinates: [ 36.900278, 30.792778 ]
  },
  {
    id: 5,
    name: "Muğla Dalaman Havalimanı",
    coordinates: [ 36.712500, 28.791389 ]
  },
  {
    id: 6,
    name: "Muğla Milas - Bodrum Havalimanı",
    coordinates: [ 37.247222, 27.681389 ]
  },
  {
    id: 7,
    name: "Adana Havalimanı",
    coordinates: [ 36.982222, 35.280278 ]
  },
  {
    id: 8,
    name: "Trabzon Havalimanı",
    coordinates: [ 40.995833, 39.785278 ]
  },
  {
    id: 9,
    name: "Isparta Süleyman Demirel Havalimanı",
    coordinates: [ 37.865000, 30.381944 ]
  },
  {
    id: 10,
    name: "Kapadokya Havalimanı",
    coordinates: [ 38.776389, 34.526389 ]
  },
  {
    id: 11,
    name: "Erzurum Havalimanı",
    coordinates: [ 39.955278, 41.169167 ]
  },
  {
    id: 12,
    name: "Gaziantep Havalimanı",
    coordinates: [ 36.947778, 37.478889 ]
  },
  {
    id: 13,
    name: "Adıyaman Havalimanı",
    coordinates: [ 37.730833, 38.468889 ]
  },
  {
    id: 14,
    name: "Ağrı Ahmed-i Hani Havalimanı",
    coordinates: [ 39.647500, 43.028611 ]
  },
  {
    id: 15,
    name: "Amasya Merzifon Havalimanı",
    coordinates: [ 40.829444, 35.522222 ]
  },
  {
    id: 16,
    name: "Balıkesir Koca Seyit Havalimanı",
    coordinates: [ 39.560278, 27.024167 ]
  },
  {
    id: 17,
    name: "Balıkesir Merkez Havalimanı",
    coordinates: [ 39.615556, 27.932778 ]
  },
  {
    id: 18,
    name: "Bursa Yenişehir Havalimanı",
    coordinates: [ 40.248889, 29.549444 ]
  },
  {
    id: 19,
    name: "Çanakkale Havalimanı",
    coordinates: [ 40.137620, 26.421990 ]
  },
  {
    id: 20,
    name: "Denizli Çardak Havalimanı",
    coordinates: [ 37.787778, 29.705000 ]
  },
  {
    id: 21,
    name: "Diyarbakır Havalimanı",
    coordinates: [ 37.892500, 40.201111 ]
  },
  {
    id: 22,
    name: "Elazığ Havalimanı",
    coordinates: [ 38.598763,39.28837 ]
  },
  {
    id: 23,
    name: "Erzincan Havalimanı",
    coordinates: [ 39.713056, 39.520556 ]
  },
  {
    id: 24,
    name: "Hatay Havalimanı",
    coordinates: [ 36.372222, 36.298611 ]
  },
  {
    id: 25,
    name: "Kahramanmaraş Havalimanı",
    coordinates: [ 37.538333, 36.951944 ]
  },
  {
    id: 26,
    name: "Kars Harakani Havalimanı",
    coordinates: [ 40.558611, 43.098889 ]
  },
  {
    id: 27,
    name: "Kayseri Havalimanı",
    coordinates: [ 38.770278, 35.495278 ]
  },
  {
    id: 28,
    name: "Konya Havalimanı",
    coordinates: [ 37.980556, 32.562500 ]
  },
  {
    id: 29,
    name: "Malatya Havalimanı",
    coordinates: [ 38.432222, 38.083056 ]
  },
  {
    id: 30,
    name: "Mardin Havalimanı",
    coordinates: [ 37.232778, 40.640556 ]
  },
  {
    id: 31,
    name: "Muş Havalimanı",
    coordinates: [ 38.744722, 41.653889 ]
  },
  {
    id: 32,
    name: "Samsun Çarşamba Havalimanı",
    coordinates: [ 41.265556, 36.548611 ]
  },
  {
    id: 33,
    name: "Siirt Havalimanı",
    coordinates: [ 37.978056, 41.839167 ]
  },
  {
    id: 34,
    name: "Sinop Havalimanı",
    coordinates: [ 42.015833, 35.066389 ]
  },
  {
    id: 35,
    name: "Sivas Nuri Demirağ Havalimanı",
    coordinates: [ 39.814167, 36.902500 ]
  },
  {
    id: 36,
    name: "Şanlıurfa Gap Havalimanı",
    coordinates: [ 37.456667, 38.908056 ]
  },
  {
    id: 37,
    name: "Tekirdağ Çorlu Havalimanı",
    coordinates: [ 41.129444, 27.906389 ]
  },
  {
    id: 38,
    name: "Tokat Havalimanı",
    coordinates: [ 40.311667, 36.373611 ]
  },
  {
    id: 39,
    name: "Uşak Havalimanı",
    coordinates: [ 38.681389, 29.471667 ]
  },
  {
    id: 40,
    name: "Van Ferit Melen Havalimanı",
    coordinates: [ 38.468611, 43.330833 ]
  },
  {
    id: 41,
    name: "Zonguldak Çaycuma Havalimanı",
    coordinates: [ 41.50437,32.095274 ]
  },
  {
    id: 42,
    name: "Antalya Gazipaşa - Alanya Havalimanı",
    coordinates: [ 36.299167, 32.301389 ]
  },
  {
    id: 43,
    name: "Çanakkale Gökçeada Havalimanı",
    coordinates: [ 40.201111, 25.882222 ]
  },
  {
    id: 44,
    name: "Batman Havalimanı",
    coordinates: [ 37.932222, 41.116389 ]
  },
  {
    id: 45,
    name: "Kocaeli Cengiz Topel Havalimanı",
    coordinates: [ 40.738763,30.09725 ]
  },
  {
    id: 46,
    name: "Iğdır Havalimanı",
    coordinates: [ 39.975249,43.875706 ]
  },
  {
    id: 47,
    name: "Bingöl Havalimanı",
    coordinates: [ 38.861111, 40.592500 ]
  },
  {
    id: 48,
    name: "Zafer Havalimanı",
    coordinates: [ 39.111456, 30.130217 ]
  },
  {
    id: 49,
    name: "Kastamonu Havalimanı",
    coordinates: [ 41.316944, 33.796111 ]
  },
  {
    id: 50,
    name: "Şırnak Şerafettin Elçi Havalimanı",
    coordinates: [ 37.364013,42.059522 ]
  },
  {
    id: 54,
    name: "Ordu Giresun Havalimanı",
    coordinates: [ 40.967149, 38.086342 ]
  },
  {
    id: 55,
    name: "Hakkari Yüksekova Selahaddin Eyyubi Havalimanı",
    coordinates: [ 37.551667, 44.233611 ]
  },
  {
    id: 0,
    name: "İstanbul Sabiha Gökçen Havalimanı",
    coordinates: [ 40.905371, 29.3168603 ]
  },
  {
    id: 0,
    name: "Eskişehir Anadolu Havalimanı",
    coordinates: [ 40.905371, 29.3168603 ]
  },
  {
    id: 0,
    name: "Aydın Çıldır Havalimanı",
    coordinates: [ 37.815000, 27.889167 ]
  }
];

var selectedId = 0;
var CHANGE_EVENT = "change";

var AirportStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return data.map(function (airport) {
      return {
        name: airport.name,
        coordinates: airport.coordinates
      }
    });
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AirportDispatcher.register(function (action) {
  switch (action.actionType) {
    case AirportConstants.AIRPORT_SELECT:
      selectedId = action.id;
      AirportStore.emitChange();
      break;
    default:
      break;
  }
});

module.exports = AirportStore;
