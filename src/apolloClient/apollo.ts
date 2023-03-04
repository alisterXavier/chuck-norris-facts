import { ApolloClient, InMemoryCache } from "@apollo/client";

//https://api.chucknorris.io/jokes/random?category={category}
//https://api.chucknorris.io/jokes/search?query={query}
//https://api.chucknorris.io/jokes/random
export const client = new ApolloClient({
    uri: "/api/hello",
    cache: new InMemoryCache()
})
