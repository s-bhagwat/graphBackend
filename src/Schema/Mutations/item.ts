import {
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
} from "graphql";

import { Items } from "../../Entities/Items";
import { ItemType } from "../TypeDefs/Item";

export const CREATE_ITEM = {
  type: ItemType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    pricePerQuantity: { type: GraphQLFloat },
    discount: { type: GraphQLFloat },
    gst: { type: GraphQLFloat },
    totalAmount: { type: GraphQLFloat },
  },
  async resolve(parent: any, args: any) {
    const invoice = await Items.insert(args);
    return args;
  },
};
