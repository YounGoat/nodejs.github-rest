'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , htp = require('htp')
    , noda = require('noda')

    /* in-package */
    , Agent = noda.inRequire('lib/agent')
    ;

function Rest(token) {
    let agent = new Agent(token);

    
}

module.exports = Rest;