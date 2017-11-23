'use strict';

const MODULE_REQUIRE = 1
    /* built-in */

    /* NPM */
    , co = require('co')
    , htp = require('htp')
    , noda = require('noda')

    /* in-package */
    , Agent = noda.inRequire('lib/agent')
    , whoami = noda.inRequire('./whoami')
    ;

/**
 * @param {string}  options.token
 * @param {string} [options.username]  username of repository's owner
 * @param {string}  options.name       name of repository to be deleted
 */
function run(options) {
    return co(function*() {
        if (!options.token) {
            throw new Error('expected option not found: token');
        }

        // Get username from options or via owner of current token.
        let username = options.username;
        if (!username) {
            let user = yield whoami({ token: options.token });
            username = user.login;
        }
        
        let agent = new Agent(options.token);
        let urlname = `/repos/${username}/${options.name}`;
        let ret = yield agent.delete(urlname);
        return ret;
    });
};

module.exports = run;
