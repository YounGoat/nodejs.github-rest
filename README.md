#   github-rest
__GitHub API based on GitHub REST API v3.__

##	Table of contents

*	[Get Started](#get-started)
*	[API](#api)
* 	[Examples](#examples)
*	[References](#references)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/nodejs.github-rest)

##  Get Started

###	Class

```javascript
const Rest = require('github-rest');
const rest = new Rest(/* token */ '<YOUR_PERSONAL_ACCESS_TOKEN>');
rest.createRepository({ name: '<REPO_NAME>'})
	.then(repo => { /* ... */ })
	.catch(err => { /* ... */ })
```

###	Standalone Function

```javascript
const createRepository = require('github-rest/createRepository');

const options = {
	token: '<YOUR_PERSONAL_ACCESS_TOKEN>',
	name: '<REPO_NAME>',
	// ...
};

createRepository(options)
	.then(repo => { /* ... */ })
	.catch(err => { /* ... */ })
	;
```

##  API

*	Class __Rest__(string *token*)
*	Promise(Object) __\<rest\>.createRepository__(Object *options*)
*	Promise(null) __\<rest\>.deleteRepository__(Object *options*)
*	Promise(Object[]) __\<rest\>.findRepositories__(Object *options*)
*	Promise(Object) __\<rest\>.getRepository__(Object *options*)
*	Promise(Object) __\<rest\>.whoami__(Object *options*)

All methods are asynchronous and will return instances of `Promise`. Hereafter, *response* means what to be obtained in `.then((response) => { /* ... */ })`.

All methods may be required and invoked by itself as what we see in [Get Started, Standalone Function](#standalone-function).

### createRepository

*	__options.token__ *string*
*	__options.orgname__ *string* OPTIONAL
*	__options.name__ *string*
*	See GitHub [REST API v3, Repositories, Create](https://developer.github.com/v3/repos/#create) for more options.

Response metadata of the just created repository.

### deleteRepository

*	__options.token__ *string*
*	__options.username__ *string* OPTIONAL
*	__options.name__ *string*

Delete repository one by once. If successfully executed (whether the repository deleted, or had been deleted before, or does not exist at all), `null` will be responsed. Otherwise, an error will be thrown and you should use `.catch()` to catch it.

### findRepositories

*	__options.token__ *string*
*	__options.orgname__ *string* OPTIONAL  
*	__options.username__ *string* OPTIONAL
*	__options.name__ *string* OPTIONAL

Response an array. Each item contains metadata of a matching repository.

*	__options.orgname__ and __options.username__ SHOULD be fullname, while __options.name__ is piece of name of target repositories.
*	If __options.name__ absent while __options.username__ or __options.orgname__ present, all repositories belong to the organization or user will be responsed.
*	If __options.name__ absent while both __options.username__ and __options.orgname__ present, the latter one will be ignored.
*	ATTNETION: If there are too many repositoies matched, only the leading ones will be responsed.

### getRepository

*	__options.token__ *string*
*	__options.username__ *string* OPTIONAL
*	__options.name__ *string*

Response metadata of the repository.

### whoami

*	__options.token__ *string*

Response metadata of the user who is the owner of the token.

##	Examples

*	[createRepository](./example/createRepository.js)
*	[deleteRepository](./example/deleteRepository.js)
*	[findRepositories](./example/findRepositories.js)
*	[getRepository](./example/getRepository.js)
*	[whoami](./example/whoami.js)

##  References

*	GitHub [REST API v3](https://developer.github.com/v3/)
*   [GraphQL API v4: Forming Calls with GraphQL](https://developer.github.com/v4/guides/forming-calls)
*   [Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
