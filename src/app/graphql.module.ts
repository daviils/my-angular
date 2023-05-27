import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, DefaultOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import Swal from "sweetalert2";
import {onError} from "@apollo/client/link/error";

const uri = 'https://support-service.pedido-hmlg.com.br/graphql'; // <-- add the URL of the GraphQL server here


const error = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    console.log('erro no graphql module verificar aqui.');
    console.log(graphQLErrors);
    graphQLErrors.map(({message, locations, path}) => {
        Swal.fire({
          title: 'Atenção',
          html: message,
          icon: 'warning',
          confirmButtonColor: '#032E58',
        });
        // console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      },
    );
  }
  if (networkError) {
    const e: any = networkError;
    if (e.status === 401) {
      window.location.href = '/';
    }
    if (e.status === 400) {
      let str = '';
      // @ts-ignore
      e.error.errors.map((x) => {
        if (x.message.length > 0) {
          str += x.message;
        }
      });
      Swal.fire({
        title: 'Atenção',
        html: str,
        icon: 'warning',
        confirmButtonColor: '#032E58',
      });
    }
  }
});

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const options: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    }
  }

  return {
    link: error.concat(httpLink.create({uri})),
    cache: new InMemoryCache(),
    defaultOptions: options,
  };
  /*return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };*/
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
