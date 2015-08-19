3dcharts
========
Test combining JSON from REST API into https://github.com/sghall/d3-threejs project.

Viewable from JSFIDDLE at http://jsfiddle.net/gh/get/jquery/2.1/shawngiese/3dcharts/tree/master/. Content displays best in Chrome and Safari web browsers.

When using from an iHub server, replace
d3.xhr(url)
    .header("X-Requested-With", "XMLHttpRequest")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .post("delay=3", function (error, request) {
        data = jQuery.parseJSON(request.response);
        if (error) return console.warn(error.responseText);

 with

d3.json(url, function (error, data) {

For example:

d3.json("http://ch-rest.actuate.com:5000/ihub/v1/dataobject/710200000100/Data%20Set%205?authId=2cwqOnGzNy6y%2FSnnFk0rU5cvuXR43zf0cfMOutp7qK%2Fa5gibDhqlvbdHyavUespvMLsuYHyIHWuzFMEJ5NjIGo%2BPTGxUV5DQHr0OC%2BJX3IkExTImML42IBoP3TnXfp5g1Kch0yj5xWor6qCo8Lg0QKeS6PDj6G7ybZYxEnFmUJ84uXLXzuHCk8HBkjOm9OUjThjLcyeczSdq%2FOlsTcKw72fjvY1chCsDcWbhRJwCsc0%3D", function (error, data) {

where the data object id is the id of the rest.data file in this project.
