/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { AccordionNav } from "@theme-ui/sidenav"
import { Location } from "@reach/router"
import NavLink from "./nav-link"
import Sidebar from "../content/sidebar.mdx"

const components = {
  wrapper: AccordionNav,
  a: NavLink,
}

export default (props) => {
  const {
    theme: { colors = {} },
  } = useThemeUI()
  return (
    <Location
      children={({ location }) => (
        <Sidebar
          {...props}
          components={components}
          pathname={location.pathname}
          sx={{
            width: 256,
            flex: "none",
            px: 3,
            pt: 3,
            pb: 4,
            mt: [64, 0],
            // not sure how to correctly reference AccordionNav background
            bg: "#f1f4f5 !important",
            border: "1px solid #dedede",
            borderWidth: [1, 0],
            button: {
              outline: "none",
            },
            "li > div": {
              borderBottom: "1px solid #dedede",
            },
            "li > a": {
              borderBottom: "1px solid #dedede",
            },
            a: {
              paddingLeft: 0,
              marginLeft: 32,
              outline: "none",
              "&:focus-visible": {
                outline: "none",
              },
            },
            "li:last-child a": {
              paddingLeft: 32,
              marginLeft: 0,
            },
          }}
        />
      )}
    />
  )
}
