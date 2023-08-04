const { buildSchema } = require('graphql');

const promptSchema = buildSchema(`
  type Prompt {
    _id: ID!
    name: String!
    type: String!
    tags: [String!]!
  }

  type Query {
    getPromptsByUserId(user_id: ID!): [Prompt]
    searchUserPromptsByName(user_id: ID!, name: String!): [Prompt]
    searchUserPromptsByTag(user_id: ID!, tag: String!): [Prompt]
  }
`);

module.exports = promptSchema;