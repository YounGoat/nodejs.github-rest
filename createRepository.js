/**
 * @see
 *   REST API v3: Repositories, v. Create
 *   https://developer.github.com/v3/repos/#create
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
 * @param {string} [options.orgname] 
 * @param {string}  options.name
 * See https://developer.github.com/v3/repos/#create for other options.
 * 
 * @return {Promise}
 */
function createRepository(options) {
    let _agent = getGithubAgent(options);

    let urlname;
    if (options.orgname) {
        urlname = `/orgs/${options.orgname}/repos`;
    }
    else {
        urlname = '/user/repos';
    }

    // Any other options are used as repository properties.
    let params = Object.assign({}, options);
    delete params.token;
    delete params.orgname;
    
    return _agent.post(urlname, params);
}

module.exports = createRepository;