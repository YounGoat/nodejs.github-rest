'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , htp = require('htp')
    , noda = require('noda')
    
    /* in-package */
    , Agent = noda.inRequire('lib/agent')
    , object2 = noda.inRequire('lib/object2')
    ;

/** 
 * @param {string}  options.token
 * @param {string} [options.orgname] 
 * @param {string}  options.name
 * See https://developer.github.com/v3/repos/#create for other options.
 */
function run(options) {
    let agent = new Agent(options.token);

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
    
    return agent.post(urlname, params);
};

module.exports = run;