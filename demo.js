var url = '/gh/get/response.json/shawngiese/3dcharts/tree/master/';
var data;

d3.xhr(url) 
    .header("X-Requested-With", "XMLHttpRequest")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .post("delay=3", function (error, request) {
        data = jQuery.parseJSON(request.response);
        if (error) return console.warn(error.responseText);

//d3.xhr loads JSON from GitHub, to load JSON from a REST API endpoint
//       comment out d3.xhr and enable the following line d3.json...
//d3.json(url, function (error, data) {

      // Aggregate the JSON data for chart building in viz.js
         var nestedData = d3.nest()
         .key(function(d) { return d.customer; })
          .entries(data.data);

          //recreate field names after changes made by nesting
         nestedData.forEach(function(d) {
          d.customer = d.key;
          d.recs = d.values;
          });

        // remove extra customer field from nesting
       nestedData.forEach(function(v){ 
        if (v.recs[0] != null) {delete v.recs[0].customer };
        if (v.recs[1] != null) {delete v.recs[1].customer };
        if (v.recs[2] != null) {delete v.recs[2].customer }
         });

        VIZ.drawElements(nestedData);
        VIZ.transform('helix');
        d3.select("#loading").remove();
        VIZ.render();
        VIZ.animate();
        window.addEventListener('resize', VIZ.onWindowResize, false);
     });
