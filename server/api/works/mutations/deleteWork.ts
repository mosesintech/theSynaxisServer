import { GraphQLNonNull, GraphQLID } from 'graphql';
import { WorkType } from '../../types';
import { deleteWork } from '../worksModel';

const deleteWorkMutation = {
  name: 'deleteWork Mutation',
  type: WorkType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: { id: number }) {
    return deleteWork(args.id);
  },
};

export default deleteWorkMutation;
