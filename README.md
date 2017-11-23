#   github-rest
__GitHub API based on GitHub REST API v3.__

##  Get Started

```javascript
const createRepository = require('github-rest/createRepository');

const options = {
	token: '<YOUR_PERSONAL_ACCESS_TOKEN>',
	name: '<REPO_NAME>',
	// ...
};

createRepository(options)
	.then(repo => {
		// ...
	})
	.catch(err => {
		// ...
	})
	;
```

##  APIs

All methods are asynchronous and will return instances of `Promise`. Hereafter, *response* means what to be obtained in `.then((response) => { /* ... */ })`.

### createRepository

*	__options.token__ *string*
*	__options.orgname__ *string* OPTIONAL
*	__options.name__ *string*
*	See [GitHub REST API v3, Repositories, Create](https://developer.github.com/v3/repos/#create) for more options.

Response an object which contains metadata of the just created repository.

### deleteRepository

*	__options.token__ *string*
*	__options.username__ *string* OPTIONAL
*	__options.name__ *string*

### findRepositories

*	__options.token__ *string*
*	__options.orgname__ *string* OPTIONAL
*	__options.username__ *string* OPTIONAL

Response an array of repositories' names.

### getRepository

*	__options.token__ *string*
*	__options.username__ *string* OPTIONAL
*	__options.name__ *string*

Response an object which contains metadata of the repository.

### whoami

*	__options.token__ *string*

Return metadata of the user who is the owner of the token.

##	Examples

*	[createRepository](./test/createRepository.js)
*	[deleteRepository](./test/deleteRepository.js)
*	[findRepositories](./test/findRepositories.js)
*	[getRepository](./test/getRepository.js)
*	[whoami](./test/whoami.js)

##  REFERENCES

*   [GraphQL API v4: Forming Calls with GraphQL](https://developer.github.com/v4/guides/forming-calls)
*   [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
