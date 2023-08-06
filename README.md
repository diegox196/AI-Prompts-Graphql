
# AI Prompts with GraphQL

It allows you to create queries using GraphQL for a more efficient and flexible data retrieva


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`: The port number on which the server will run. For example: `3521`.

`DB_URI`: The connection URL for your database.

`JWT_SECRET`: The secret key used for signing and verifying JSON Web Tokens.


## How to use

You can make requests to the API using any method you prefer (fetch API, Axios, jQuery AJAX, etc.).

```js
const response = await axios.post('http://localhost:3521/api/prompts/graphql', {
    query: `
      {
        query_here
      }`,
  },
  {
    headers: {
        'Authorization': 'Bearer your_jwt_token_here'
    }
  });
```

OR

```js
const response = await fetch('http://localhost:3521/api/prompts/graphql', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_jwt_token_here'
  },
  body: JSON.stringify({
    query: `
      {
        query_here
      }
    `,
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
```


## GraphQL Query Reference

### Get all prompts by user ID

```http
POST /api/prompts/graphql
```

Retrieve all prompts associated with a specific user by their ID.

```graphql
query {
  getPromptsByUserId(user_id: "USER_ID_HERE") {
    _id
    name
    type
    tags
  }
}
```

### Search user prompts by name

```http
POST /api/prompts/graphql
```

Search prompts of a user by name, ignoring case.

```graphql
query {
  searchUserPromptsByName(user_id: "USER_ID_HERE", name: "PROMPT_NAME_HERE") {
    _id
    name
    type
    tags
  }
}
```

### Search user prompts by tag

```http
POST /api/prompts/graphql
```

Search prompts of a user by tag.

```graphql
query {
  searchUserPromptsByTag(user_id: "USER_ID_HERE", tag: "TAG_NAME_HERE") {
    _id
    name
    type
    tags
  }
}
```
