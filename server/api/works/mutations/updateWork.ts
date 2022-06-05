import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import { WorkType } from '../../types';
import { updateWork } from '../worksModel';

type Args = {
  id: number;
  title?: string;
  publishedDate?: string;
  saintId?: number;
};

const updateWorkMutation = {
  name: 'updateWork Mutation',
  type: WorkType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    publishedDate: { type: GraphQLString },
    saintId: { type: GraphQLID },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: Args) {
    return updateWork(args);
  },
};

export default updateWorkMutation;
