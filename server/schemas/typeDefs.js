const typeDefs =`

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks:[Book]
}
type Query {
    users(_id:ID!): [User]
}`
