import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import SiteInfo from "./SiteInfo"

import styled from "styled-components"

const MainMenuWrapper = styled.div`
  display: flex;
  max-width: 100vw;
  width: 100%;
  flex-direction: row;
  background-color: rgb(3, 27, 77);

  /* a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 20px 10px;
  } */
`

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 20px 10px;
`

const MainMenuInner = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main Menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <MenuItem to={`/${item.object_slug}`} key={item.title}>
                {item.title}
              </MenuItem>
            )
          )}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
)

export default MainMenu
