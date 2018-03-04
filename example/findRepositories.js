'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , findRepositories = noda.inRequire('findRepositories')
    , token = noda.inRead('token', 'ascii')
    ;

findRepositories({ 
    token, 
    username: 'YounGoat', /* Replace with your github login name. */
    name: 'ecma',
}).then(metas => {
    metas.forEach(meta => {
        console.log(`Repository ${meta.name} found.`);
    });
}).catch(err => {
    console.log(err);
});