var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_biomass_1 = new ol.format.GeoJSON();
var features_biomass_1 = format_biomass_1.readFeatures(json_biomass_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_biomass_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_biomass_1.addFeatures(features_biomass_1);
var lyr_biomass_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_biomass_1, 
                style: style_biomass_1,
                popuplayertitle: 'biomass',
                interactive: true,
    title: 'biomass<br />\
    <img src="styles/legend/biomass_1_0.png" /> Formasi Hutan<br />\
    <img src="styles/legend/biomass_1_1.png" /> Mangrove<br />\
    <img src="styles/legend/biomass_1_2.png" /> Tumbuhan Non-Hutan Lainnya<br />\
    <img src="styles/legend/biomass_1_3.png" /> Sawah<br />\
    <img src="styles/legend/biomass_1_4.png" /> Pertanian Lainnya<br />\
    <img src="styles/legend/biomass_1_5.png" /> Lubang Tambang<br />\
    <img src="styles/legend/biomass_1_6.png" /> Non-Vegetasi Lainnya<br />\
    <img src="styles/legend/biomass_1_7.png" /> Tambak<br />\
    <img src="styles/legend/biomass_1_8.png" /> Sungai, Danau, Laut<br />' });
var format_KerentananBanjir_Cilacap_2 = new ol.format.GeoJSON();
var features_KerentananBanjir_Cilacap_2 = format_KerentananBanjir_Cilacap_2.readFeatures(json_KerentananBanjir_Cilacap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KerentananBanjir_Cilacap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KerentananBanjir_Cilacap_2.addFeatures(features_KerentananBanjir_Cilacap_2);
var lyr_KerentananBanjir_Cilacap_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KerentananBanjir_Cilacap_2, 
                style: style_KerentananBanjir_Cilacap_2,
                popuplayertitle: 'KerentananBanjir_Cilacap',
                interactive: true,
    title: 'KerentananBanjir_Cilacap<br />\
    <img src="styles/legend/KerentananBanjir_Cilacap_2_0.png" /> Rendah<br />\
    <img src="styles/legend/KerentananBanjir_Cilacap_2_1.png" /> Sedang<br />\
    <img src="styles/legend/KerentananBanjir_Cilacap_2_2.png" /> Tinggi<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_biomass_1.setVisible(true);lyr_KerentananBanjir_Cilacap_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_biomass_1,lyr_KerentananBanjir_Cilacap_2];
lyr_biomass_1.set('fieldAliases', {'fid': 'fid', 'gridcode': 'gridcode', 'class_id': 'class_id', 'class_en': 'class_en', 'class_id_b': 'class_id_b', 'lv1_en': 'lv1_en', 'lv1_id': 'lv1_id', 'hex_color': 'hex_color', });
lyr_KerentananBanjir_Cilacap_2.set('fieldAliases', {'DN': 'DN', 'Kategori': 'Kategori', });
lyr_biomass_1.set('fieldImages', {'fid': 'TextEdit', 'gridcode': 'TextEdit', 'class_id': 'TextEdit', 'class_en': 'TextEdit', 'class_id_b': 'TextEdit', 'lv1_en': 'TextEdit', 'lv1_id': 'TextEdit', 'hex_color': 'TextEdit', });
lyr_KerentananBanjir_Cilacap_2.set('fieldImages', {'DN': 'Range', 'Kategori': 'TextEdit', });
lyr_biomass_1.set('fieldLabels', {'fid': 'no label', 'gridcode': 'no label', 'class_id': 'no label', 'class_en': 'no label', 'class_id_b': 'inline label - visible with data', 'lv1_en': 'no label', 'lv1_id': 'no label', 'hex_color': 'no label', });
lyr_KerentananBanjir_Cilacap_2.set('fieldLabels', {'DN': 'no label', 'Kategori': 'inline label - visible with data', });
lyr_KerentananBanjir_Cilacap_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});