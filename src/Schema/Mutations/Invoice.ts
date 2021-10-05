import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLList,
  GraphQLString,
} from "graphql";
import { InvoiceType } from "../TypeDefs/Invoice";
import { Invoices } from "../../Entities/Invoice";
import { resolve } from "path/posix";
import { MessageType } from "../TypeDefs/Messages";
import { GraphQLDateTime } from "graphql-iso-date";
import { ItemType } from "../TypeDefs/Item";
import { ItemInputType } from "../TypeDefs/Item";
import { Items } from "../../Entities/Items";

export const CREATE_INVOICE = {
  type: InvoiceType,
  args: {
    buyerName: { type: GraphQLString },
    buyerContactNo: { type: GraphQLString },
    dateTime: { type: GraphQLDateTime },
    total: { type: GraphQLFloat },
    paid: { type: GraphQLBoolean },
  },
  async resolve(parent: any, args: any) {
    const { buyerName, buyerContactNo, dateTime, total, paid, items } = args;
    console.log("[Items] :", items);

    const invoice = await Invoices.insert({
      buyerName,
      buyerContactNo,
      dateTime,
      total,
      paid,
    });
    return args;
  },
};

export const ADD_ITEM = {
  type: MessageType,
  args: {
    invoiceId: { type: GraphQLID },
    itemId: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    // if item is present in database just link it otherwise create it and than link it
    const { invoiceId, itemId } = args;
    console.log({ invoiceId, itemId });

    try {
      const invoice = await Invoices.findOne({ id: invoiceId });
      if (!invoice) {
        throw new Error("Invoice doesn't exist");
      }
      const item = await Items.findOne({ id: itemId });
      if (!item) {
        throw new Error("Item doesnt exit");
      }
      await Invoices.createQueryBuilder()
        .relation(Invoices, "items")
        .of(invoice)
        .add(item);
    } catch (err) {
      console.log(err);
    }
    return { successful: true, message: "Inserted successfully !" };
  },
};

// export const UPDATE_PASSWORD = {
//   type: MessageType,
//   args: {
//     username: { type: GraphQLString },
//     oldPassword: { type: GraphQLString },
//     newPassword: { type: GraphQLString },
//   },
//   async resolve(parent: any, args: any) {
//     const { username, oldPassword, newPassword } = args;
//     const user = await Invoices.findOne({ username: username });

//     if (!user) {
//       throw new Error("Username doesn't exist");
//     }
//     const userPassword = user?.password;
//     if (oldPassword === userPassword) {
//       await Invoices.update({ username: username }, { password: newPassword });
//       return { successful: true, message: "Password updated successfully!" };
//     } else {
//       throw new Error("Passwords don't match!");
//     }
//   },
// };

export const DELETE_INVOICE = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Invoices.delete(id);
    return { successful: true, message: "Deleted successfully !" };
  },
};
