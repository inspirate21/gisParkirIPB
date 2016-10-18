var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Buffering22meter = new ol.format.GeoJSON();
var features_Buffering22meter = format_Buffering22meter.readFeatures(geojson_Buffering22meter, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffering22meter = new ol.source.Vector();
jsonSource_Buffering22meter.addFeatures(features_Buffering22meter);var lyr_Buffering22meter = new ol.layer.Vector({
                source:jsonSource_Buffering22meter, 
                style: style_Buffering22meter,
                title: "Buffering 220 meter"
            });var format_TempatParkir = new ol.format.GeoJSON();
var features_TempatParkir = format_TempatParkir.readFeatures(geojson_TempatParkir, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TempatParkir = new ol.source.Vector();
jsonSource_TempatParkir.addFeatures(features_TempatParkir);var lyr_TempatParkir = new ol.layer.Vector({
                source:jsonSource_TempatParkir, 
                style: style_TempatParkir,
                title: "Tempat Parkir"
            });var format_TitikParkir = new ol.format.GeoJSON();
var features_TitikParkir = format_TitikParkir.readFeatures(geojson_TitikParkir, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TitikParkir = new ol.source.Vector();
jsonSource_TitikParkir.addFeatures(features_TitikParkir);var lyr_TitikParkir = new ol.layer.Vector({
                source:jsonSource_TitikParkir, 
                style: style_TitikParkir,
                title: "Titik Parkir"
            });

lyr_Buffering22meter.setVisible(false);lyr_TempatParkir.setVisible(true);lyr_TitikParkir.setVisible(true);
var layersList = [baseLayer,lyr_Buffering22meter,lyr_TempatParkir,lyr_TitikParkir];
