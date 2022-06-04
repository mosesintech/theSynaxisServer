import { GraphQLNonNull, GraphQLID } from 'graphql';
import { WorkType } from '../../types';
import { getWork } from '../worksModel';

const getWorkQuery = {
  name: 'getWork Query',
  type: WorkType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: { id: number }) {
    return getWork(args.id);
  },
};

export default getWorkQuery;
