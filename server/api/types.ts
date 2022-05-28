import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';

const SaintType = new GraphQLObjectType({
  name: 'SaintType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    life: { type: GraphQLString },
    born: { type: GraphQLString },
    died: { type: GraphQLString },
    isBc: { type: GraphQLBoolean },
    feastMonth: { type: GraphQLInt },
    feastDate: { type: GraphQLInt },
    isMartyr: { type: GraphQLBoolean },
    isConfessor: { type: GraphQLBoolean },
    isPatriarch: { type: GraphQLBoolean },
    isBishop: { type: GraphQLBoolean },
    isPriest: { type: GraphQLBoolean },
    isDeacon: { type: GraphQLBoolean },
    isMonk: { type: GraphQLBoolean },
    isMarried: { type: GraphQLBoolean },
    isMale: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    modifiedAt: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean },
  }),
});

export default SaintType;
