import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import { CREATE_SHOP, DELETE_SHOP } from "./Mutations/Shop";
import { GET_ALL_SHOPS } from "./Queries/Shop";
import { ADD_ITEM, CREATE_INVOICE, DELETE_INVOICE } from "./Mutations/Invoice";
import { GET_ALL_INVOICES, GET_ALL_ITEMS } from "./Queries/Invoice";
import { CREATE_ITEM } from "./Mutations/item";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllShops: GET_ALL_SHOPS,
    getAllInvoices: GET_ALL_INVOICES,
    getAllItems: GET_ALL_ITEMS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    createShop: CREATE_SHOP,
    deleteShop: DELETE_SHOP,
    createInvoice: CREATE_INVOICE,
    deleteInvoice: DELETE_INVOICE,
    addItem: ADD_ITEM,
    createItem: CREATE_ITEM,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
