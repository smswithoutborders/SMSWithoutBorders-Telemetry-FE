anychart.onDocumentReady(function () {
    var map = anychart.map();
    map.geoData(anychart.maps.world);

    // set the series
    var series = map.marker(anyChartData);

    map.title("Marker series on a map");

    anychart.theme('darkGlamour');

    //format the labels of the id-defined series
    series.labels().format("{%name}");

    series.tooltip().format("Id: {%id} \nUsers: {%value}");


    // add zoom ui controls
    var zoomController = anychart.ui.zoom();
    zoomController.render(map);


    // disable labels
    series.labels(false);

    // set the container
    map.container('mapping');
    map.draw();
  });