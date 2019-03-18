import { gql } from 'apollo-boost'

const getReservations = gql`
    {
        reservations {
            id
            name
            hotelName
            arrivalDate
            departureDate
          }
    }
`

const getReservation = gql`
query GetReservation($id: ID){
    reservation(id: $id) {
        id
        name
        hotelName
        arrivalDate
        departureDate
      }
}
`

const createReservation = gql`
    mutation createReservation($name: String!, $hotelName: String!, $arrivalDate: String!, $departureDate: String!){
        createReservation(name: $name, hotelName: $hotelName, arrivalDate: $arrivalDate, departureDate: $departureDate){
            name
            hotelName
            arrivalDate
            departureDate
        }
    }
`



export { getReservations, getReservation, createReservation }
