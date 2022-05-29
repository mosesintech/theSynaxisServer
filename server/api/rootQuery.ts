import { GraphQLObjectType } from 'graphql';
import { getSaintQuery, getSaintsQuery } from './saints/queries';

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getSaintQuery,
    getSaintsQuery,
  },
});

export default rootQuery;
