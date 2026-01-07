export const movieTypesDefs = `
  type Award {
     wins: Int
     nominations: Int
     text: String
  }

  type Movie {
    _id: ID
    title: String
    author: String
    awards: [Award]
   
  }

  input MovieInput {
    title: String
    author: String
  }

`;

export const movieQueryTypeDefs = `
  movie(_id: ID): Movie
  movies(title:String,page: Int!): [Movie]
`;

export const movieMutationTypeDefs = `
 addMovie(input: MovieInput): String
`;

export const userTypeDefs = `
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }
     type auth{
    message: String
    token: String
    }

    input UserInput {
    name: String
    email: String
    password: String
    }
    input LoginInput{
    email: String
    password:String}
`;

export const userQueryTypeDefs = `
  userDetail(_id: ID): User
`;

export const userMutationTypeDefs = `
  addUser(input: UserInput): User
`;

export const usersMutationTypeDefs = `
 userLogin(input: LoginInput):auth`;
