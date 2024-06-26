/** @jsx jsx */
import { jsx, Header, Container, Flex, useColorMode } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import MenuButton from "./menu-button"
import NavLink from "./nav-link"

import Content from "../content/header.mdx"

const modes = ["light", "dark", "deep", "swiss"]

const components = {
  a: NavLink,
}

const styles = {
  alignItems: "center",
  width: "100%",
  h1: {
    m: 0,
  },
  ul: {
    ml: "auto",
    display: "flex",
    listStyleType: "none",
  },
  li: {
    ml: 3,
  },
  img: {
    pt: 2,
    width: 70,
  },
  p: {
    margin: 0,
  },
  h4: {
    m: 0,
    ml: 3,
  },
}

export default ({ menuOpen, setMenuOpen, nav }) => {
  const [mode, setMode] = useColorMode("light")

  return (
    <Header
      sx={{
        boxShadow: "0 0 10px rgba(0, 0, 0, .5)",
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container sx={{ padding: 0 }}>
        <Flex sx={{ justifyContent: "space-between" }}>
          <Flex sx={styles}>
            <MenuButton
              onClick={(e) => {
                setMenuOpen(!menuOpen)
                if (!nav.current) return
                const navLink = nav.current.querySelector("a")
                if (navLink) navLink.focus()
              }}
            />
            <MDXProvider components={components}>
              <Content />
            </MDXProvider>
          </Flex>
        </Flex>
      </Container>
    </Header>
  )
}
