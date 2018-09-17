const { ApolloServer, gql, GraphQLUpload } = require('apollo-server-hapi');
const Hapi = require('hapi');

const typeDefs = `
  type Query {
    uploadFile(file: Upload!): File
  }

  type File {
    filename: String
  }
`;

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    uploadFile: () => ({ filename: 'foo' }),
  }
}

async function StartServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const app = new Hapi.server({
    port: 4000
  });

  await server.applyMiddleware({
    app,
  });

  await server.installSubscriptionHandlers(app.listener);

  await app.start();
}

StartServer().catch(error => console.log(error));
