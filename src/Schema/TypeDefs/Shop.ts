import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const ShopType = new GraphQLObjectType({
  name: "Shop",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    contactNo: { type: GraphQLString },
    emailId: { type: GraphQLString },
  }),
});
