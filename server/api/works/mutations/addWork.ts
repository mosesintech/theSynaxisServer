import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import { WorkType } from '../../types';
import { addWork } from '../worksModel';

type Args = {
  title: string;
  publishedDate: string;
  saintId: number;
};

const addWorkMutation = {
  name: 'addWork Mutation',
  type: WorkType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    publishedDate: { type: new GraphQLNonNull(GraphQLString) },
    saintId: { type: new GraphQLNonNull(GraphQLID) },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: Args) {
    return addWork(args);
  },
};

export default addWorkMutation;
