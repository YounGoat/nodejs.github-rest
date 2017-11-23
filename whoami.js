'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , htp = require('htp')
    , noda = require('noda')
    
    /* in-package */
    , Agent = noda.inRequire('lib/agent')
    ;

function run(options) {
    let agent = new Agent(options.token);
    let urlname = '/user';
    return agent.get(urlname);
};

module.exports = run;