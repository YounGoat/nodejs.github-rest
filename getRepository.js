'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , co = require('co')
    , htp = require('htp')
    , noda = require('noda')
    
    /* in-package */
    , Agent = noda.inRequire('lib/agent')
    , whoami = require('./whoami')
    ;

/**
 * @param {string} [options.username]  username of repository's owner
 * @param {string} [options.orgname]   
 */
function run(options) {
    return co(function*() {
        // Get username from options or via owner of current token.
        let username = options.username;
        if (!username) {
            if (!options.token) {
                throw new Error('expected option(s) not found: token | username');
            }
            let user = yield whoami({ token: options.token });
            username = user.login;
        }
        
        let agent = new Agent(options.token);
        let urlname = `/repos/${username}/${options.name}`;
        let repo = yield agent.get(urlname);

        return repo;
    });
};

module.exports = run;