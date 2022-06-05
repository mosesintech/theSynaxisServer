import { GraphQLNonNull, GraphQLID } from 'graphql';
import { WorkType } from '../../types';
import { restoreWork } from '../worksModel';

const restoreWorkMutation = {
  name: 'restoreWork Mutation',
  type: WorkType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: { id: number }) {
    return restoreWork(args.id);
  },
};

export default restoreWorkMutation;
