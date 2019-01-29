const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # Schema here
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true
});

server
  .listen()
  .then(({ port }) => console.log(`Server running on port ${port}`));
