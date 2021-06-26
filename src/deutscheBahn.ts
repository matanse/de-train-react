/** @format */

import { ApolloClient, gql, InMemoryCache } from "@apollo/client";


const deURL = "https://bahnql.herokuapp.com/graphql";
const client = new ApolloClient({
  uri: deURL,
  cache: new InMemoryCache(),
});

export function stationsByName(name: string){
  return client.query({
        query: gql`
        {
          search(searchTerm: "${name}") {
            stations {
              name
              primaryEvaId
            }
            operationLocations {
              name
              id
              regionId
              abbrev
              locationCode
            }
          }
        }
      `,
  });
}

export function stationById(stationId: number) {
  return client
      .query({
        query: gql`
      {
        stationWithEvaId(evaId: ${stationId}) {
          name
          location {
            latitude
            longitude
          }
          picture {
            url
          }
        }
      }
      `,
      }) ;
}
