// =========================================
// CREATE MAP
// =========================================

const map = L.map("map", {
    zoomControl: true
}).setView(
    [9.93, -84.08],
    8
);


// =========================================
// BASE MAPS
// =========================================

// OpenStreetMap
const osmLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors"
    }
);


// Satellite
const satelliteLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
        maxZoom: 19,
        attribution: "Esri World Imagery"
    }
);


// Topographic
const topographicLayer = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 17,
        attribution: "© OpenTopoMap"
    }
);


// =========================================
// DEFAULT BASE MAP
// =========================================

osmLayer.addTo(map);


// =========================================
// BASE MAP COLLECTION
// =========================================

const baseMaps = {
    osm: osmLayer,
    satellite: satelliteLayer,
    topographic: topographicLayer
};


// =========================================
// CHANGE BASE MAP
// =========================================

const baseMapOptions =
    document.querySelectorAll(
        'input[name="baseMap"]'
    );


baseMapOptions.forEach(function(option) {

    option.addEventListener(
        "change",
        function() {

            // Remove current base maps
            Object.values(baseMaps)
                .forEach(function(layer) {

                    if (map.hasLayer(layer)) {
                        map.removeLayer(layer);
                    }

                });


            // Add selected base map
            const selectedLayer =
                baseMaps[this.value];


            if (selectedLayer) {
                selectedLayer.addTo(map);
            }

        }
    );

});
