/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

// Background-color LOGO
const StyledWrapper = styled.div`
  
`

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  line-height: 1.2rem;
  
`

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.15em;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <StyledWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledDiv>
          <StyledMain>{children}</StyledMain>
        </StyledDiv>
      </StyledWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
