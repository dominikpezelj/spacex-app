import { GraphQLClient } from 'graphql-request'
import { endpoint } from '../common/constants'

export const graphQLClient = new GraphQLClient(endpoint, {
  method: 'POST',
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
})
