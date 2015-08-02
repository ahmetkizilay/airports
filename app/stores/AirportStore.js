"use strict";

var data = [
  {
    id: 1,
    name: "İstanbul Atatürk Havalimanı ",
    coordinates: [ 40.976111, 28.813889 ]
  },
  {
    id: 2,
    name: "İzmir Adnan Menderes Havalimanı",
    coordinates: [ 38.289167, 27.155000 ]
  },
  {
    id: 3,
    name: "Muğla Dalaman Havalimanı",
    coordinates: [ 36.712500, 28.791389 ]
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
  }
];

var AirportStore = {
  getAll: function() {
    return data.map(function (airport) {
      return {
        name: airport.name,
        coordinates: airport.coordinates
      }
    });
  }
};

module.exports = AirportStore;
