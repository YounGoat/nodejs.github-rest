'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, noda = require('noda')
    
    /* in-package */
    , Rest = noda.inRequire('.')
    , token = noda.inRead('token', 'ascii')
	;

const rest = new Rest(token);
rest.whoami().then(meta => {
	console.log(`I am ${meta.login}.`);
}).catch(err => {
	console.log(err);
});
