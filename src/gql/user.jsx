import { gql } from "@apollo/client";


export const REGISTER = gql`
mutation register( $input: UserInput ){
    register( input: $input ){
        id
        name
        userName
        email
        createAt
    }
}
`;

export const LOGIN = gql`
mutation login($input: LoginInput){
    login(input: $input){
        token
    }
}
`;

export const GET_USER = gql`
query getUser( $id: ID, $username: String ) {
    getUser(id: $id, userName: $username){
    id
    name
    userName
    email
    siteWeb
    description
    avatar
    createAt
    }
}
`;