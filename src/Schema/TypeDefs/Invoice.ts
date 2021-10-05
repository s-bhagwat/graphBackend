import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLInputObjectType,
} from "graphql";
import { GraphQLDateTime } from "graphql-iso-date";
import { ItemType } from "./Item";
import { ItemInputType } from "./Item";

export const InvoiceType: any = new GraphQLObjectType({
  name: "Invoice",
  fields: () => ({
    id: { type: GraphQLID },
    buyerName: { type: GraphQLString },
    buyerContactNo: { type: GraphQLString },
    dateTime: { type: GraphQLDateTime },
    total: { type: GraphQLFloat },
    paid: { type: GraphQLBoolean },
    items: { type: new GraphQLList(ItemType) },
  }),
});

export const InvoiceInputType: any = new GraphQLInputObjectType({
  name: "InvoiceInput",
  fields: () => ({
    id: { type: GraphQLID },
    buyerName: { type: GraphQLString },
    buyerContactNo: { type: GraphQLString },
    dateTime: { type: GraphQLDateTime },
    total: { type: GraphQLFloat },
    paid: { type: GraphQLBoolean },
    items: { type: new GraphQLList(ItemInputType) },
  }),
});
