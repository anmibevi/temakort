var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Lokalplanvedtaget_1 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_1 = format_Lokalplanvedtaget_1.readFeatures(json_Lokalplanvedtaget_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_1.addFeatures(features_Lokalplanvedtaget_1);
var lyr_Lokalplanvedtaget_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_1, 
                style: style_Lokalplanvedtaget_1,
                popuplayertitle: 'Lokalplan - vedtaget',
                interactive: true,
                title: '<img src="styles/legend/Lokalplanvedtaget_1.png" /> Lokalplan - vedtaget'
            });
var format_Lokalplanforeslet_2 = new ol.format.GeoJSON();
var features_Lokalplanforeslet_2 = format_Lokalplanforeslet_2.readFeatures(json_Lokalplanforeslet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanforeslet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanforeslet_2.addFeatures(features_Lokalplanforeslet_2);
var lyr_Lokalplanforeslet_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanforeslet_2, 
                style: style_Lokalplanforeslet_2,
                popuplayertitle: 'Lokalplan - foreslået',
                interactive: true,
                title: '<img src="styles/legend/Lokalplanforeslet_2.png" /> Lokalplan - foreslået'
            });
var format_Strandbeskyttedeomrder_3 = new ol.format.GeoJSON();
var features_Strandbeskyttedeomrder_3 = format_Strandbeskyttedeomrder_3.readFeatures(json_Strandbeskyttedeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttedeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttedeomrder_3.addFeatures(features_Strandbeskyttedeomrder_3);
var lyr_Strandbeskyttedeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttedeomrder_3, 
                style: style_Strandbeskyttedeomrder_3,
                popuplayertitle: 'Strandbeskyttede områder',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttedeomrder_3.png" /> Strandbeskyttede områder'
            });
var format_Frededeomrder_4 = new ol.format.GeoJSON();
var features_Frededeomrder_4 = format_Frededeomrder_4.readFeatures(json_Frededeomrder_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_4.addFeatures(features_Frededeomrder_4);
var lyr_Frededeomrder_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_4, 
                style: style_Frededeomrder_4,
                popuplayertitle: 'Fredede områder',
                interactive: false,
    title: 'Fredede områder<br />\
    <img src="styles/legend/Frededeomrder_4_0.png" /> Damhuså<br />\
    <img src="styles/legend/Frededeomrder_4_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/Frededeomrder_4_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/Frededeomrder_4_3.png" /> Vestvolden<br />\
    <img src="styles/legend/Frededeomrder_4_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/Frededeomrder_4_5.png" /> <br />' });
var format_Toiletter_5 = new ol.format.GeoJSON();
var features_Toiletter_5 = format_Toiletter_5.readFeatures(json_Toiletter_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toiletter_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toiletter_5.addFeatures(features_Toiletter_5);
var lyr_Toiletter_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toiletter_5, 
                style: style_Toiletter_5,
                popuplayertitle: 'Toiletter',
                interactive: true,
                title: '<img src="styles/legend/Toiletter_5.png" /> Toiletter'
            });
var format_Togstationer_6 = new ol.format.GeoJSON();
var features_Togstationer_6 = format_Togstationer_6.readFeatures(json_Togstationer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_6.addFeatures(features_Togstationer_6);
var lyr_Togstationer_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_6, 
                style: style_Togstationer_6,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_6.png" /> Togstationer'
            });
var format_bornehaver_7 = new ol.format.GeoJSON();
var features_bornehaver_7 = format_bornehaver_7.readFeatures(json_bornehaver_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bornehaver_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bornehaver_7.addFeatures(features_bornehaver_7);
var lyr_bornehaver_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bornehaver_7, 
                style: style_bornehaver_7,
                popuplayertitle: 'bornehaver',
                interactive: true,
                title: '<img src="styles/legend/bornehaver_7.png" /> bornehaver'
            });
var format_Fritidogkultur_8 = new ol.format.GeoJSON();
var features_Fritidogkultur_8 = format_Fritidogkultur_8.readFeatures(json_Fritidogkultur_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fritidogkultur_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fritidogkultur_8.addFeatures(features_Fritidogkultur_8);
var lyr_Fritidogkultur_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fritidogkultur_8, 
                style: style_Fritidogkultur_8,
                popuplayertitle: 'Fritid og kultur',
                interactive: true,
                title: '<img src="styles/legend/Fritidogkultur_8.png" /> Fritid og kultur'
            });
var format_Folkeskoler_9 = new ol.format.GeoJSON();
var features_Folkeskoler_9 = format_Folkeskoler_9.readFeatures(json_Folkeskoler_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_9.addFeatures(features_Folkeskoler_9);
var lyr_Folkeskoler_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_9, 
                style: style_Folkeskoler_9,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_9.png" /> Folkeskoler'
            });
var format_Trossamfund_10 = new ol.format.GeoJSON();
var features_Trossamfund_10 = format_Trossamfund_10.readFeatures(json_Trossamfund_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trossamfund_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trossamfund_10.addFeatures(features_Trossamfund_10);
var lyr_Trossamfund_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trossamfund_10, 
                style: style_Trossamfund_10,
                popuplayertitle: 'Trossamfund',
                interactive: true,
                title: '<img src="styles/legend/Trossamfund_10.png" /> Trossamfund'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_Lokalplanvedtaget_1.setVisible(true);lyr_Lokalplanforeslet_2.setVisible(true);lyr_Strandbeskyttedeomrder_3.setVisible(true);lyr_Frededeomrder_4.setVisible(true);lyr_Toiletter_5.setVisible(true);lyr_Togstationer_6.setVisible(true);lyr_bornehaver_7.setVisible(true);lyr_Fritidogkultur_8.setVisible(true);lyr_Folkeskoler_9.setVisible(true);lyr_Trossamfund_10.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_Lokalplanvedtaget_1,lyr_Lokalplanforeslet_2,lyr_Strandbeskyttedeomrder_3,lyr_Frededeomrder_4,lyr_Toiletter_5,lyr_Togstationer_6,lyr_bornehaver_7,lyr_Fritidogkultur_8,lyr_Folkeskoler_9,lyr_Trossamfund_10];
lyr_Lokalplanvedtaget_1.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Lokalplanforeslet_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Strandbeskyttedeomrder_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Frededeomrder_4.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Toiletter_5.set('fieldAliases', {'Enhed': 'Enhed', 'Adresse': 'Adresse', 'by': 'by', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_bornehaver_7.set('fieldAliases', {'fid': 'fid', 'Institutio': 'Institutio', 'Type': 'Type', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type_1': 'type_1', 'latlong': 'latlong', });
lyr_Fritidogkultur_8.set('fieldAliases', {'fid': 'fid', 'Fritid nav': 'Fritid nav', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Folkeskoler_9.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Trossamfund_10.set('fieldAliases', {'fid': 'fid', 'Trossamfun': 'Trossamfun', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Lokalplanvedtaget_1.set('fieldImages', {'fid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Lokalplanforeslet_2.set('fieldImages', {'fid': '', 'plannr': '', 'plannavn': '', 'datovedt': '', 'doklink': '', 'anvendelse': '', });
lyr_Strandbeskyttedeomrder_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Frededeomrder_4.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Toiletter_5.set('fieldImages', {'Enhed': 'TextEdit', 'Adresse': 'TextEdit', 'by': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_6.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_bornehaver_7.set('fieldImages', {'fid': 'TextEdit', 'Institutio': 'TextEdit', 'Type': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type_1': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Fritidogkultur_8.set('fieldImages', {'fid': 'TextEdit', 'Fritid nav': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Folkeskoler_9.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Trossamfund_10.set('fieldImages', {'fid': 'TextEdit', 'Trossamfun': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Lokalplanvedtaget_1.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Lokalplanforeslet_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Strandbeskyttedeomrder_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Frededeomrder_4.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Toiletter_5.set('fieldLabels', {'Enhed': 'no label', 'Adresse': 'no label', 'by': 'no label', });
lyr_Togstationer_6.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_bornehaver_7.set('fieldLabels', {'fid': 'no label', 'Institutio': 'no label', 'Type': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type_1': 'no label', 'latlong': 'no label', });
lyr_Fritidogkultur_8.set('fieldLabels', {'fid': 'no label', 'Fritid nav': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Folkeskoler_9.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Trossamfund_10.set('fieldLabels', {'fid': 'no label', 'Trossamfun': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Trossamfund_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});