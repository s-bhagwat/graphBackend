import { GraphQLID, GraphQLString } from "graphql";
import { ShopType } from "../TypeDefs/Shop";
import { Shops } from "../../Entities/Shops";
import { resolve } from "path/posix";
import { MessageType } from "../TypeDefs/Messages";

export const CREATE_SHOP = {
  type: ShopType,
  args: {
    name: { type: GraphQLString },
    address: { type: GraphQLString },
    contactNo: { type: GraphQLString },
    emailId: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    await Shops.insert(args);
    return args;
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
//     const user = await Users.findOne({ username: username });

//     if (!user) {
//       throw new Error("Username doesn't exist");
//     }
//     const userPassword = user?.password;
//     if (oldPassword === userPassword) {
//       await Users.update({ username: username }, { password: newPassword });
//       return { successful: true, message: "Password updated successfully!" };
//     } else {
//       throw new Error("Passwords don't match!");
//     }
//   },
// };

export const DELETE_SHOP = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Shops.delete(id);
    return { successful: true, message: "Deleted successfully !" };
  },
};
