import { gql } from "@apollo/client";

export const GetCompanyContactInfo = gql`
query GetCompanyContactInfo {
  companyContactInfos {
    companyName
    contactName
    contactEmail
    contactPhone
    isPrimaryContact
    country
    city
    address
    createdAt
    updatedAt
    status
  }
}
`;