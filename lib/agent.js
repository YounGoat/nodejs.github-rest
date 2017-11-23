'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , url = require('url')
    /* NPM */
    , htp = require('htp')
    , noda = require('noda')
    /* in-package */
    , conf = noda.inRequire('conf')
    ;

function request(method, pathname, body) {
    let headers = {};
    headers['Accept'] = 'application/vnd.github.v3+json';

    if (this.token) {
        headers['Authorization'] = `token ${this.token}`;
    }
    
    let urlname = `${conf.endpoint}${pathname}`;
    
    let p = body ? htp(method, urlname, headers, body) : htp(method, urlname, headers);

    return new Promise((resolve, reject) => {
        p
            .then(response => {
                if (200 <= response.statusCode && response.statusCode < 300) {
                    console.log(response.headers);
                    resolve(response.body);
                }
                else {
                    resolve(null);
                }
            })
            .catch(reject)
            ;
    });
}

function Agent(token) {
    this.token = token;
}

Agent.prototype.get = function(pathname, parameters) {
    pathname = url.format({ pathname, query: parameters });
    return request.call(this, 'GET', pathname);
};

Agent.prototype.post = function(pathname, parameters) {
    return request.call(this, 'POST', pathname, parameters);
};

Agent.prototype.patch = function(pathname, parameters) {
    return request.call(this, 'PATCH', pathname, parameters);
};

Agent.prototype.put = function(pathname, parameters) {
    return request.call(this, 'PUT', pathname, parameters);
};

Agent.prototype.delete = function(pathname, parameters) {
    return request.call(this, 'DELETE', pathname, parameters);
};

module.exports = Agent;