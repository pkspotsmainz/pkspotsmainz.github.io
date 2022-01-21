
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleHybrid_0": {
            "type": "raster",
            "tiles": ["http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "MainzSpots_1": {
            "type": "geojson",
            "data": json_MainzSpots_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleHybrid_0_0",
            "type": "raster",
            "source": "GoogleHybrid_0"
        },
        {
            "id": "lyr_MainzSpots_1_0",
            "type": "circle",
            "source": "MainzSpots_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#ffffff', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#000000'}
        }
],
}