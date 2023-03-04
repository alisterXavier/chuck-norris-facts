import { gql } from "@apollo/client";

export const getRandom = gql`
  query Query {
    random {
      id
      value
      icon_url
    }
  }
`;

export const getSearch = gql`
  query Query($query: String!) {
    search(query: $query) {
      id
      value
      icon_url
    }
  }
`;

export const getCategory = gql`
  query Query($query: String!) {
    categories(query: $query) {
      id
      value
      icon_url
    }
  }
`;
