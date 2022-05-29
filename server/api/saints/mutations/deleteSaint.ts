import { GraphQLNonNull, GraphQLID } from 'graphql';
import SaintType from '../../types';
import { deleteSaint } from '../saintsModel';

const deleteSaintMutation = {
  name: 'deleteSaint Mutation',
  type: SaintType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: { id: number }) {
    return deleteSaint(args.id);
  },
};

export default deleteSaintMutation;
