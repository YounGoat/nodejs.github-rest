'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, noda = require('noda')
	, SimpleAgent = require('htp/SimpleAgent')	

	/* in-package */
	, conf = noda.inRequire('conf')
	;

class GithubAgent extends SimpleAgent {
	
	/**
	 * @param  {string} options        token
	 * @param  {object} options
	 * @param  {string} options.token  token
	 */
	constructor(options) {
		let token = null;
		if (typeof options == 'string') {
			token = options;
		}
		else if (options) {
			token = options.token;
		}

		let headers = {};

		headers['Accept'] = conf.mime;
		// headers['Accept'] = 'application/vnd.github.mercy-preview+json';

		if (token) {
			headers['Authorization'] = `token ${token}`;
		}

		let beforeCallback = (err, response) => {
			if (err) throw err;
			return (response.statusCode >= 200 && response.statusCode < 300)
				? response.body : null;
		};

		let agentOptions = {
			endPoint: conf.endpoint,
			headers,
			beforeCallback,
		};

		super(agentOptions);

		this.token = token;
	}
}

module.exports = GithubAgent;