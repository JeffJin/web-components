// require("!style!css!./style.css");
require("./../styles/style.css");
document.write(require("./content.js"));

var yell = require('./alert.js');
require('hash-change').on('change', function(hash) {
    yell(hash);
});