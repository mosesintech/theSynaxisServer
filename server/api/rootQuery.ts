import { GraphQLObjectType } from 'graphql';
import { getSaintQuery, getSaintsQuery } from './saints/queries';
import { getWorkQuery, getWorksQuery } from './works/queries';

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getSaintQuery,
    getSaintsQuery,
    getWorkQuery,
    getWorksQuery,
  },
});

export default rootQuery;
