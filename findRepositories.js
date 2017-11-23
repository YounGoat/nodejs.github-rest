'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , htp = require('htp')
    , noda = require('noda')
    
    /* in-package */
    , Agent = noda.inRequire('lib/agent')
    ;

/**
 * @param {string}  options.token
 * @param {string} [options.username]  username of repository's owner
 * @param {string} [options.orgname]   
 */
function run(options) {
    let agent = new Agent(options.token);

    let urlname;
    if (options.username) {
        urlname = `/user/${options.username}/repos`;
    }
    else if (options.orgname) {
        urlname = `/orgs/${options.orgname}/repos`;
    }
    else {
        urlname = '/user/repos';
    }
    
    return agent.get(urlname);
};

module.exports = run;