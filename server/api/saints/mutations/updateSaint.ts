import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';
import { SaintType } from '../../types';
import { updateSaint } from '../saintsModel';

type Args = {
  id: number;
  name?: string;
  life?: string;
  born?: string;
  died?: string;
  feastMonth?: number;
  feastDate?: number;
  isBc?: boolean;
  isApostle?: boolean;
  isLXX?: boolean;
  isMartyr?: boolean;
  isConfessor?: boolean;
  isPatriarch?: boolean;
  isBishop?: boolean;
  isPriest?: boolean;
  isDeacon?: boolean;
  isMonk?: boolean;
  isMarried?: boolean;
  isMale?: boolean;
};

const updateSaintMutation = {
  name: 'updateSaint Mutation',
  type: SaintType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    life: { type: GraphQLString },
    born: { type: GraphQLString },
    died: { type: GraphQLString },
    feastMonth: { type: GraphQLInt },
    feastDate: { type: GraphQLInt },
    isBc: { type: GraphQLBoolean },
    isApostle: { type: GraphQLBoolean },
    isLXX: { type: GraphQLBoolean },
    isMartyr: { type: GraphQLBoolean },
    isConfessor: { type: GraphQLBoolean },
    isPatriarch: { type: GraphQLBoolean },
    isBishop: { type: GraphQLBoolean },
    isPriest: { type: GraphQLBoolean },
    isDeacon: { type: GraphQLBoolean },
    isMonk: { type: GraphQLBoolean },
    isMarried: { type: GraphQLBoolean },
    isMale: { type: GraphQLBoolean },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(parent: any, args: Args) {
    return updateSaint(args);
  },
};

export default updateSaintMutation;
