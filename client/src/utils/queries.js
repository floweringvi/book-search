import { gql } from "@apollo/client";

export const QUERY_ME = gql`
query QUERY_ME {
    me {
        _id
        username
        email 
        password
        savedBooks {
            _id
            title
        }
    }
}`;

export const QUERY_USER = gql `
query user($userId : ID!) {
    user (userId: $userId) {
        _id
        username 
        email
    }
}`