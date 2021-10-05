import { GraphQLList } from "graphql";
import { ShopType } from "../TypeDefs/Shop";
import { Shops } from "../../Entities/Shops";

export const GET_ALL_SHOPS = {
  type: new GraphQLList(ShopType),
  resolve() {
    return Shops.find();
  },
};
