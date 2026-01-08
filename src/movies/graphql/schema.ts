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
  userId:String
  plot: String
  genre: String
    title: String
    year: Int
    runtime: String
    cast: String
    poster: String
    fullplot: String
    relased: Int
    langueges: [String]
    directors: String
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
type Comment {
 email:String
    name:String
    movie_id:String
    text: String
    date:Int
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
export const commentTypeDefs = `
    input CommentInput {
    movie_id:String
    text: String
    date:Int
    }`;

export const userQueryTypeDefs = `
  userDetail(_id: ID): User
`;

export const userMutationTypeDefs = `
  addUser(input: UserInput): User
`;

export const usersMutationTypeDefs = `
 userLogin(input: LoginInput):auth`;

export const commentMutationTypeDefs = `
 addComment(input: CommentInput):Comment`;
