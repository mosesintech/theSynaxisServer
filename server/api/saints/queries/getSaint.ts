import { GraphQLNonNull, GraphQLID } from 'graphql';
import SaintType from '../../types';
import { getSaint } from '../saintsModel';

const getSaintQuery = {
  name: 'getSaint Query',
  type: SaintType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: { id: number }) {
    return getSaint(args.id);
  },
};

export default getSaintQuery;
