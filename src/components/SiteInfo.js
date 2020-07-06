import React from "react"
import { graphql, StaticQuery } from "gatsby"

import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
`

const SiteTitle = styled.div`
  font-weight: bold;
`

const SiteDescription = styled.div`
  font-weight: lighter;
`

const SiteInfo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <SiteTitle>
          {props.allWordpressSiteMetadata.edges[0].node.name}
        </SiteTitle>
        <SiteDescription>
          {props.allWordpressSiteMetadata.edges[0].node.description}
        </SiteDescription>
      </SiteInfoWrapper>
    )}
  />
)

export default SiteInfo
