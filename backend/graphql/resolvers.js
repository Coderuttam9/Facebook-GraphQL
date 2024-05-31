import post from "../model/Post.js";
export const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await post.find();
    },
  },

  Mutation: {
    //    create post 
    createPost: async (_, { description, image }) => {
      const data = await post.create({
        description,
        image,
      });
      return data;
    },
  },
};
