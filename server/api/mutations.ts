import { GraphQLObjectType } from 'graphql';
import {
  addSaintMutation,
  updateSaintMutation,
  deleteSaintMutation,
  restoreSaintMutation,
} from './saints/mutations';
import {
  addWorkMutation,
  updateWorkMutation,
  deleteWorkMutation,
  restoreWorkMutation,
} from './works/mutations';

const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addSaintMutation,
    updateSaintMutation,
    deleteSaintMutation,
    restoreSaintMutation,
    addWorkMutation,
    updateWorkMutation,
    deleteWorkMutation,
    restoreWorkMutation,
  },
});

export default mutations;
