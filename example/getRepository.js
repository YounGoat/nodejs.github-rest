'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , getRepository = noda.inRequire('getRepository')
    , token = noda.inRead('token', 'ascii')
    ;

getRepository({ 
    token, 
    name: 'github-rest-demo',
})
.then(meta => {
    console.log(`Repository ${meta.name} found.`);
    console.log(meta);
}).catch(err => {
    console.log(err);
});
