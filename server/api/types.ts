import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';

export const SaintType = new GraphQLObjectType({
  name: 'SaintType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    life: { type: GraphQLString },
    born: { type: GraphQLString },
    died: { type: GraphQLString },
    isBc: { type: GraphQLBoolean },
    isApostle: { type: GraphQLBoolean },
    isLXX: { type: GraphQLBoolean },
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

export const WorkType = new GraphQLObjectType({
  name: 'WorkType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    publishedDate: { type: GraphQLString },
    saintId: { type: GraphQLID },
    createdAt: { type: GraphQLString },
    modifiedAt: { type: GraphQLString },
    isDeleted: { type: GraphQLBoolean },
  }),
});
