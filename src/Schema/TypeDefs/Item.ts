import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLInputObjectType,
} from "graphql";

import { InvoiceInputType, InvoiceType } from "./Invoice";

export const ItemType: any = new GraphQLObjectType({
  name: "Item",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    pricePerQuantity: { type: GraphQLFloat },
    discount: { type: GraphQLFloat },
    gst: { type: GraphQLFloat },
    totalAmount: { type: GraphQLFloat },
    invoices: { type: new GraphQLList(InvoiceType) },
  }),
});

export const ItemInputType: any = new GraphQLInputObjectType({
  name: "ItemInput",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    pricePerQuantity: { type: GraphQLFloat },
    discount: { type: GraphQLFloat },
    gst: { type: GraphQLFloat },
    totalAmount: { type: GraphQLFloat },
    invoices: { type: new GraphQLList(InvoiceInputType) },
  }),
});
