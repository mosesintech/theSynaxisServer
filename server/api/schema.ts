import { GraphQLSchema } from 'graphql';
import rootQuery from './rootQuery';
import mutation from './mutations';

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation,
});

export default schema;
