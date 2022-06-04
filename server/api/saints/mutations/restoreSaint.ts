import { GraphQLNonNull, GraphQLID } from 'graphql';
import { SaintType } from '../../types';
import { restoreSaint } from '../saintsModel';

const restoreSaintMutation = {
  name: 'restoreSaint Mutation',
  type: SaintType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: { id: number }) {
    return restoreSaint(args.id);
  },
};

export default restoreSaintMutation;
