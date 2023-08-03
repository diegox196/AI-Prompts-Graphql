const app = require('express'); // app.js file with the Express configuration
const graphqlRoute = app.Router();
const { graphqlHTTP } = require('express-graphql');
const promptSchema = require('../schemas/promptSchema');
const promptResolver = require('../resolvers/graphqlResolver');

graphqlRoute.use('/graphql', graphqlHTTP({
  schema: promptSchema,
  rootValue: promptResolver,
  graphiql: true,
}));

module.exports = graphqlRoute;