'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    , noda = require('noda')

    /* in-package */
    , deleteRepository = noda.inRequire('deleteRepository')
    , token = noda.inRead('token', 'ascii')
    ;

let name = 'github-rest-demo';
deleteRepository({
    token,
    name,
}).then(data => {
    console.log(`Repository ${name} deleted.`);
    console.log(data === null);
}).catch(err => {
    console.log(err);
});
