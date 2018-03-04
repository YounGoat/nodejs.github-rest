'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    , noda = require('noda')
    
    /* in-package */
    , getGithubAgent = noda.inRequire('lib/getGithubAgent')
    ;

/**
 * @param {Object}       options
 * @param {string}       options.token
 * @return {Promise}
 */
function whoami(options) {
    let _agent = getGithubAgent.call(this, options);
    let urlname = '/user';
    return _agent.get(urlname);
};

module.exports = whoami;