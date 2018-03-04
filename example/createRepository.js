'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , createRepository = noda.inRequire('createRepository')
    , token = noda.inRead('token', 'ascii')
    ;

createRepository({ 
    token, 
    name: 'github-rest-demo',
}).then(meta => {
    console.log(`Repository ${meta.name} created.`);
    console.log(meta);
}).catch(err => {
    console.log(err);
});
