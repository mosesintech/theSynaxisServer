import { GraphQLObjectType } from 'graphql';
import {
  addSaintMutation,
  updateSaintMutation,
  deleteSaintMutation,
  restoreSaintMutation,
} from './saints/mutations';

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addSaintMutation,
    updateSaintMutation,
    deleteSaintMutation,
    restoreSaintMutation,
  },
});

export default mutations;
