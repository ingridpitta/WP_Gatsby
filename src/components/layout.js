import React from "react"
import MainMenu from "./MainMenu"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body, html{
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`
const LayoutWrapper = styled.div`
  max-width: 100vw;
  width: 80%;
  margin: 100px auto;

  div {
    p {
      text-align: justify;
    }
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout
