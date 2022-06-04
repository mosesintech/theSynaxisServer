import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import { SaintType } from '../../types';
import { addSaint } from '../saintsModel';

type Args = {
  name: string;
  life: string;
  born: string;
  died: string;
  feastMonth: number;
  feastDate: number;
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

const addSaintMutation = {
  name: 'addSaint Mutation',
  type: SaintType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    life: { type: new GraphQLNonNull(GraphQLString) },
    born: { type: new GraphQLNonNull(GraphQLString) },
    died: { type: new GraphQLNonNull(GraphQLString) },
    feastMonth: { type: new GraphQLNonNull(GraphQLInt) },
    feastDate: { type: new GraphQLNonNull(GraphQLInt) },
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
    return addSaint(args);
  },
};

export default addSaintMutation;
