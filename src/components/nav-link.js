/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import isAbsoluteURL from "is-absolute-url"

const styles = {
  display: "block",
  px: 2,
  py: 2,
  color: "primary",
  textDecoration: "none",
  fontSize: 2,
  fontWeight: "600",
  fontFamily: "heading",
  "&.active": {
    color: "secondary",
  },
}

export default ({ href, children, ...props }) => {
  const isExternal = isAbsoluteURL(href || "")

  if (isExternal) {
    return (
      <a {...props} href={href} sx={styles}>
        {children}
      </a>
    )
  }

  const to = props.to || href

  return (
    <Link {...props} to={to} sx={styles} activeClassName="active">
      {children}
    </Link>
  )
}
