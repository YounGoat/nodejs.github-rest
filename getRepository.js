/**
 * @see
 *   REST API v3: Repositories, vi. Get
 *   https://developer.github.com/v3/repos/#get
 */

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , co = require('co')
    , noda = require('noda')
    
    /* in-package */
    , getGithubAgent = noda.inRequire('lib/getGithubAgent')
    , whoami = require('./whoami')
    ;

/**
 * @param {string}      [options.token]    
 * @param {string}      [options.username]  username of repository's owner
 * @param {string}       options.name       repository name
 * @return {Promise}
 */
function getRepository(options) {
    let _agent = getGithubAgent(options);

    return co(function*() {
        // Get username from options or via owner of current token.
        let username = options.username;
        if (!username) {
            let user = yield whoami(options);
            if (user) username = user.login;
        }
        if (!username) {
            throw new Error('username expected');
        }
        
        let urlname = `/repos/${username}/${options.name}`;
        let repo = yield _agent.get(urlname);

        return repo;
    });
};

module.exports = getRepository;