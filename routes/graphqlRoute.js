const app = require('express'); // app.js file with the Express configuration
const graphqlRoute = app.Router();
const { graphqlHTTP } = require('express-graphql');
const promptSchema = require('../schemas/promptSchema');
const promptResolver = require('../resolvers/graphqlResolver');

// Middleware
const checkUserAuth = require('../middlewares/userAuth'); // Import the userAuth middleware for user authentication.
const checkUserRoleAuth = require('../middlewares/userRole'); // Import the userRole middleware for user role authorization.

graphqlRoute.use('/graphql', checkUserAuth, checkUserRoleAuth(['user']), graphqlHTTP({
  schema: promptSchema,
  rootValue: promptResolver,
  graphiql: true,
}));

module.exports = graphqlRoute;