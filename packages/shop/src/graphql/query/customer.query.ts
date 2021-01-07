import { gql } from '@apollo/client';

export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser($userInput: String ) {
    me(userInput: $userInput) {
      id
      name
      email
      password
      address {
        id
        type
        name
        info
      }
      contact {
        id
        type
        number
      }
      card {
        id
        type
        cardType
        name
        lastFourDigit
      }
    }
  }
`;
