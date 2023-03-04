import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import axios from "axios";

const typeDefs = `#graphql
type Query{
    categories(query: String!): results
    search(query: String!): [results]
    random: results
}
type results {
    icon_url: String,
    id: String,
    value: String
}
`;

const resolvers = {
  Query: {
    categories: async (_: any, query: { query: string }) => {
      const res = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${query.query}`
      );
      return {
        id: res.data.id,
        icon_url: res.data.icon_url,
        value: res.data.value,
      };
    },
    search: async (_: any, query: { query: string }) => {
      const res = await axios
        .get(`https://api.chucknorris.io/jokes/search?query=${query.query}`)
        .then((res) =>
          res.data.result.map(
            (item: { id: any; icon_url: any; value: any }) => {
              return {
                id: item.id,
                icon_url: item.icon_url,
                value: item.value,
              };
            }
          )
        );
      return res;
    },
    random: async () => {
      const res = await axios.get(`https://api.chucknorris.io/jokes/random`);
      return {
        id: res.data.id,
        icon_url: res.data.icon_url,
        value: res.data.value,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server);
