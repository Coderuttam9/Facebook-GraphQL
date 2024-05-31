import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($description: String!, $image: String!) {
    createPost(description: $description, image: $image) {
      description
      image
    }
  }
`;
