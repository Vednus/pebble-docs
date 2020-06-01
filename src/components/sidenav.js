/** @jsx jsx */
import { jsx } from "theme-ui"
import { AccordionNav } from "@theme-ui/sidenav"
import { Location } from "@reach/router"
import NavLink from "./nav-link"
import Sidebar from "../content/sidebar.mdx"

const components = {
  wrapper: AccordionNav,
  a: NavLink,
}

export default (props) => (
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
          button: {
            outline: "none",
          },
        }}
      />
    )}
  />
)
