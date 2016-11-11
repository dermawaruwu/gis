var mymap = L.map('peta').setView([-6.231, 106.865], 17);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGVybWF3YXJ1d3UiLCJhIjoiY2l1ZmFhemkzMDAyNzMwbGwxcDhndmhvNCJ9.mj9dpYvfsWFRkypWQ6Ph4Q', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.light'
}).addTo(mymap);