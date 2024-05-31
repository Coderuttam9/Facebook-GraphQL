export const typeDefs = `#graphql

type post {
    id: ID!
    description: String
    image: String
}

type Query {
    # Find posts
    getAllPosts: [post]
}

type Mutation {
    # Create post
    createPost(
        description:String,
        image:String
    ):post
}
`;
