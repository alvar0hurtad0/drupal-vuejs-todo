var chromedriver = require('chromedriver');

module.exports = {
    "dev": {
        before : function(done) {
            chromedriver.start();
            done();
        },

        after : function(done) {
            chromedriver.stop();
            done();
        },
    },

};
