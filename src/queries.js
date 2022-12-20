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
  query keywordSearch ($keyword: String!) {
    keywordSearch(keyword: $keyword) {
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

