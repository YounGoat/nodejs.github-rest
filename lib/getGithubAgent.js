'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, noda = require('noda')
	
	/* in-package */
	, GithubAgent = noda.inRequire('class/GithubAgent')
	;

const _agents = {};

function getGithubAgent(options) {
	if (this && this.__proto__.classId == noda.inRequire('class.id')) {
		return this.agent;
	}

	let token = options.token ? options.token : '.';
	let agent = _agents[token];
	if (!agent) {
		agent = new GithubAgent(token);
	}
	return agent;
}

module.exports = getGithubAgent;