function startup(Cesium) {
    'use strict';
 Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZjk4ZWQyZi0zZGYyLTRjZDgtYTU5NC0yNzc1MGMyNTE3ZTUiLCJpZCI6MTg0OTksInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzM5MDU5ODN9.l13Rp6wv1NrbMOicXvuKUk3QkU9MxYpRPmYHSZhtojs';

var viewer = new Cesium.Viewer('cesiumContainer');
var imageryLayer = viewer.imageryLayers.addImageryProvider(
    new Cesium.IonImageryProvider({ assetId: 3 })
);

viewer.zoomTo(imageryLayer)
    .otherwise(function (error) {
        console.log(error);
    });
var promise = Cesium.IonResource.fromAssetId(57986)
    .then(function (resource) {
        return Cesium.GeoJsonDataSource.load(resource);
    })
    .then(function (dataSource) {
        return viewer.dataSources.add(dataSource);
    })
    .then(function (dataSource) {
        return viewer.zoomTo(dataSource);
    })
    .otherwise(function (error) {
        console.log(error);
    });
 
    var promise = Cesium.IonResource.fromAssetId(58229)
    .then(function (resource) {
        return Cesium.GeoJsonDataSource.load(resource);
    })
    .then(function (dataSource) {
        return viewer.dataSources.add(dataSource);
    });
    } 
if (typeof Cesium !== 'undefined') {
    window.startupCalled = true;
    startup(Cesium);
}