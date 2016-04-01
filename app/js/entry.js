// require("!style!css!./style.css");
require("./../styles/style.css");

var yell = require('./alert.js');
require('hash-change').on('change', function(hash) {
    yell(hash);
});

var componentFactory = require('./component-maker');
componentFactory('videoContainerTemplate', 'video-container');
componentFactory('sliderTemplate', 'image-slider');



