import { GraphQLList } from 'graphql';
import { WorkType } from '../../types';
import { getWorks } from '../worksModel';

const getWorksQuery = {
  name: 'getWorks Query',
  type: new GraphQLList(WorkType),
  args: {},
  resolve() {
    return getWorks();
  },
};

export default getWorksQuery;
