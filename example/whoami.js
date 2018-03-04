'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , whoami = noda.inRequire('whoami')
    , token = noda.inRead('token', 'ascii')
    ;

whoami({ 
    token,
}).then(meta => {
    console.log(`I am ${meta.login}.`);
}).catch(err => {
    console.log(err);
});
