var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_230219__1 = new ol.format.GeoJSON();
var features_230219__1 = format_230219__1.readFeatures(json_230219__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230219__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230219__1.addFeatures(features_230219__1);
var lyr_230219__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_230219__1, 
                style: style_230219__1,
                interactive: true,
                title: '<img src="styles/legend/230219__1.png" /> 230219_Вебкарта агитация'
            });
var format_TJK_adm3_2 = new ol.format.GeoJSON();
var features_TJK_adm3_2 = format_TJK_adm3_2.readFeatures(json_TJK_adm3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TJK_adm3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TJK_adm3_2.addFeatures(features_TJK_adm3_2);
var lyr_TJK_adm3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TJK_adm3_2, 
                style: style_TJK_adm3_2,
                interactive: true,
    title: 'TJK_adm3<br />\
    <img src="styles/legend/TJK_adm3_2_0.png" /> Asht<br />\
    <img src="styles/legend/TJK_adm3_2_1.png" /> Ayni<br />\
    <img src="styles/legend/TJK_adm3_2_2.png" /> Baljuvon<br />\
    <img src="styles/legend/TJK_adm3_2_3.png" /> Bokhtar<br />\
    <img src="styles/legend/TJK_adm3_2_4.png" /> Danghara<br />\
    <img src="styles/legend/TJK_adm3_2_5.png" /> Darvoz<br />\
    <img src="styles/legend/TJK_adm3_2_6.png" /> Farkhor<br />\
    <img src="styles/legend/TJK_adm3_2_7.png" /> Fayzobod<br />\
    <img src="styles/legend/TJK_adm3_2_8.png" /> Ghafurov<br />\
    <img src="styles/legend/TJK_adm3_2_9.png" /> Ghonchi<br />\
    <img src="styles/legend/TJK_adm3_2_10.png" /> Hissor<br />\
    <img src="styles/legend/TJK_adm3_2_11.png" /> Isfara<br />\
    <img src="styles/legend/TJK_adm3_2_12.png" /> Ishkoshim<br />\
    <img src="styles/legend/TJK_adm3_2_13.png" /> Istaravshan<br />\
    <img src="styles/legend/TJK_adm3_2_14.png" /> Jabor Rasulov<br />\
    <img src="styles/legend/TJK_adm3_2_15.png" /> Jilikul<br />\
    <img src="styles/legend/TJK_adm3_2_16.png" /> Jirgatol<br />\
    <img src="styles/legend/TJK_adm3_2_17.png" /> Jomi<br />\
    <img src="styles/legend/TJK_adm3_2_18.png" /> Khovaling<br />\
    <img src="styles/legend/TJK_adm3_2_19.png" /> Khuroson<br />\
    <img src="styles/legend/TJK_adm3_2_20.png" /> Kolkhozobod<br />\
    <img src="styles/legend/TJK_adm3_2_21.png" /> Konibodom<br />\
    <img src="styles/legend/TJK_adm3_2_22.png" /> Kuhistoni Mastchoh<br />\
    <img src="styles/legend/TJK_adm3_2_23.png" /> Kulob<br />\
    <img src="styles/legend/TJK_adm3_2_24.png" /> Matchin<br />\
    <img src="styles/legend/TJK_adm3_2_25.png" /> Moskva<br />\
    <img src="styles/legend/TJK_adm3_2_26.png" /> Muminobod<br />\
    <img src="styles/legend/TJK_adm3_2_27.png" /> Murghob<br />\
    <img src="styles/legend/TJK_adm3_2_28.png" /> Norak<br />\
    <img src="styles/legend/TJK_adm3_2_29.png" /> Nosir Khusrav<br />\
    <img src="styles/legend/TJK_adm3_2_30.png" /> Nurobod<br />\
    <img src="styles/legend/TJK_adm3_2_31.png" /> Pandjakent<br />\
    <img src="styles/legend/TJK_adm3_2_32.png" /> Panj<br />\
    <img src="styles/legend/TJK_adm3_2_33.png" /> Qabodiyon<br />\
    <img src="styles/legend/TJK_adm3_2_34.png" /> Qumsangir<br />\
    <img src="styles/legend/TJK_adm3_2_35.png" /> Rasht<br />\
    <img src="styles/legend/TJK_adm3_2_36.png" /> Roghun<br />\
    <img src="styles/legend/TJK_adm3_2_37.png" /> Roshtqala<br />\
    <img src="styles/legend/TJK_adm3_2_38.png" /> Rudaki<br />\
    <img src="styles/legend/TJK_adm3_2_39.png" /> Rushon<br />\
    <img src="styles/legend/TJK_adm3_2_40.png" /> Sarband<br />\
    <img src="styles/legend/TJK_adm3_2_41.png" /> Shahrinav<br />\
    <img src="styles/legend/TJK_adm3_2_42.png" /> Shahriston<br />\
    <img src="styles/legend/TJK_adm3_2_43.png" /> Shahrituz<br />\
    <img src="styles/legend/TJK_adm3_2_44.png" /> Shughnon<br />\
    <img src="styles/legend/TJK_adm3_2_45.png" /> Shurobod<br />\
    <img src="styles/legend/TJK_adm3_2_46.png" /> Sovet<br />\
    <img src="styles/legend/TJK_adm3_2_47.png" /> Spitamen<br />\
    <img src="styles/legend/TJK_adm3_2_48.png" /> Tavildara<br />\
    <img src="styles/legend/TJK_adm3_2_49.png" /> Tojikobod<br />\
    <img src="styles/legend/TJK_adm3_2_50.png" /> Tursunzoda<br />\
    <img src="styles/legend/TJK_adm3_2_51.png" /> Vahdat<br />\
    <img src="styles/legend/TJK_adm3_2_52.png" /> Vakhsh<br />\
    <img src="styles/legend/TJK_adm3_2_53.png" /> Vanj<br />\
    <img src="styles/legend/TJK_adm3_2_54.png" /> Varzob<br />\
    <img src="styles/legend/TJK_adm3_2_55.png" /> Vose<br />\
    <img src="styles/legend/TJK_adm3_2_56.png" /> Yovon<br />\
    <img src="styles/legend/TJK_adm3_2_57.png" /> Zafarobod<br />\
    <img src="styles/legend/TJK_adm3_2_58.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_230219__1.setVisible(true);lyr_TJK_adm3_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_230219__1,lyr_TJK_adm3_2];
lyr_230219__1.set('fieldAliases', {'fid': 'fid', });
lyr_TJK_adm3_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'ID_3': 'ID_3', 'NAME_3': 'NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'NL_NAME_3': 'NL_NAME_3', 'VARNAME_3': 'VARNAME_3', });
lyr_230219__1.set('fieldImages', {'fid': '', });
lyr_TJK_adm3_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'ID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', });
lyr_230219__1.set('fieldLabels', {'fid': 'no label', });
lyr_TJK_adm3_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'ID_3': 'no label', 'NAME_3': 'no label', 'TYPE_3': 'header label', 'ENGTYPE_3': 'no label', 'NL_NAME_3': 'no label', 'VARNAME_3': 'no label', });
lyr_TJK_adm3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});