/**
 * @see
 *   REST API v3: Repositories
 *   https://developer.github.com/v3/repos/
 * 
 *   REST API v3: Search
 *   https://developer.github.com/v3/search/
 */

'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , htp = require('htp')
    , noda = require('noda')
    
    /* in-package */
    , getGithubAgent = noda.inRequire('lib/getGithubAgent')
    ;

/**
 * @param {string}  options.token
 * @param {string} [options.username]  username of repository's owner
 * @param {string} [options.orgname]
 * @param {string} [options.name]
 * @return {Promise}
 */
function run(options) {
    let _agent = getGithubAgent(options);

    let urlname;

    /**
     * Search
     * https://developer.github.com/v3/search/
     */
    if (options.name) {
        let Qs = [];
        Qs.push(`${options.name}in:name`);

        if (options.username) {
            Qs.push(`user:${options.username}`);
        }

        if (options.orgname) {
            Qs.push(`org:${options.orgname}`);
        }

        urlname = `/search/repositories?q=${Qs.join('+')}`;
    }
    else if (options.username) {

        /**
         * List user repositories
         * https://developer.github.com/v3/repos/#list-user-repositories
         */
        urlname = `/user/${options.username}/repos`;
    }
    else if (options.orgname) {

        /**
         * List organization repositories
         * https://developer.github.com/v3/repos/#list-organization-repositories
         */
        urlname = `/orgs/${options.orgname}/repos`;
    }
    else {

        /**
         * List your repositories
         * https://developer.github.com/v3/repos/#list-your-repositories
         * 
         * Here "you" refers to the token owner.
         */
        urlname = '/user/repos';
    }
    
    return _agent.get(urlname).then(data => {
        if (data == null) return [];
        if (data instanceof Array) return data;
        if (data.items instanceof Array) return data.items;
    });
};

module.exports = run;