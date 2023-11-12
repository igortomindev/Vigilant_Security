var map = L.map('map').setView([51.44945348328076, -0.9579518428687095], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.44945348328076, -0.9579518428687095]).addTo(map);
