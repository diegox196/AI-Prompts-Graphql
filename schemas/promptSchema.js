const { buildSchema } = require('graphql');

const promptSchema = buildSchema(`
  type Prompt {
    _id: ID!
    name: String!
    type: String!
    tags: [String!]!
    user_id: ID!
  }

  type Query {
    getAllPrompts: [Prompt]
    searchPromptsByName(name: String!): [Prompt]
    searchPromptsByTag(tag: String!): [Prompt]
  }
`);

module.exports = promptSchema;