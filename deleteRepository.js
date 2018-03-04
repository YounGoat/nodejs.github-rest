/**
 * @see 
 *   REST API v3: Repositories, xiv. Delete a repository
 *   https://developer.github.com/v3/repos/#delete-a-repository
 */

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */

    /* NPM */
    , co = require('co')
    , noda = require('noda')

    /* in-package */
    , getGithubAgent = noda.inRequire('lib/getGithubAgent')
    , whoami = noda.inRequire('./whoami')
    ;

/**
 * @param {string}       options.token
 * @param {string}      [options.username]  username of repository's owner
 * @param {string}       options.name       name of repository to be deleted
 *
 * @return {Promise}
 */
function deleteRepository(options) {
    let _agent = getGithubAgent(options);

    return co(function*() {
        // Get username from options or via owner of current token.
        let username = options.username;
        if (!username) {
            let user = yield whoami(options);
            username = user.login;
        }
        
        let urlname = `/repos/${username}/${options.name}`;
        let ret = yield _agent.delete(urlname);
        return ret;
    });
};

module.exports = deleteRepository;
