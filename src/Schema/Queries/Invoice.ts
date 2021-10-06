import { GraphQLList } from "graphql";
import { Invoices } from "../../Entities/Invoice";
import { Items } from "../../Entities/Items";
import { InvoiceType } from "../TypeDefs/Invoice";
import { ItemType } from "../TypeDefs/Item";

export const GET_ALL_INVOICES = {
  type: new GraphQLList(InvoiceType),
  resolve() {
    return Invoices.find({ relations: ["items"] });
  },
};

export const GET_ALL_ITEMS = {
  type: new GraphQLList(ItemType),
  resolve() {
    return Items.find({ relations: ["invoices"] });
  },
};
