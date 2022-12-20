import { gql } from '@apollo/client'

export const GET_ALL_COMPANIES = gql`
  query allCompanies { 
    company {
      companyName
      description
      hiringLink
      rolesHiringFor
      locationsHiringIn
      oneNiceThing
      comments
    }
  }
`;

export const GET_SEARCH_RESULTS = gql`
  query searchMultiple ($description: String!, $locationsHiringIn: String!) {
    search(
        description: "$description",
        locationsHiringIn: "$locationsHiringIn"
    ) {
        id
        companyName
        description
        locationsHiringIn
        rolesHiringFor
    }
  }
`