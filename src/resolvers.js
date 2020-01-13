import { Cat } from "./models/Cat";
export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      console.log(JSON.stringify(kitty, null, 2));
      return kitty;
    }
  }
};
