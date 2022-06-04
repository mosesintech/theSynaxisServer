import { GraphQLList } from 'graphql';
import { SaintType } from '../../types';
import { getSaints } from '../saintsModel';

const getSaintsQuery = {
  name: 'getSaints Query',
  type: new GraphQLList(SaintType),
  args: {},
  resolve() {
    return getSaints();
  },
};

export default getSaintsQuery;
