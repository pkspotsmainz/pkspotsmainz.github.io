var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSattelite_1 = new ol.layer.Tile({
            'title': 'Google Sattelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MainzSpots_2 = new ol.format.GeoJSON();
var features_MainzSpots_2 = format_MainzSpots_2.readFeatures(json_MainzSpots_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainzSpots_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainzSpots_2.addFeatures(features_MainzSpots_2);
var lyr_MainzSpots_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainzSpots_2, 
                style: style_MainzSpots_2,
                interactive: true,
                title: '<img src="styles/legend/MainzSpots_2.png" /> Mainz Spots'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleSattelite_1.setVisible(false);lyr_MainzSpots_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSattelite_1,lyr_MainzSpots_2];
lyr_MainzSpots_2.set('fieldAliases', {'name': 'name', 'adress': 'adress', 'link': 'link', });
lyr_MainzSpots_2.set('fieldImages', {'name': 'TextEdit', 'adress': 'TextEdit', 'link': 'TextEdit', });
lyr_MainzSpots_2.set('fieldLabels', {'name': 'header label', 'adress': 'inline label', 'link': 'inline label', });
lyr_MainzSpots_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});