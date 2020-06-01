const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
  color: "heading",
  a: {
    color: "inherit",
    textDecoration: "none",
  },
}

export default {
  initialColorMode: "light",
  colors: {
    text: "rgba(0, 0, 0, .67)",
    background: "#f1f4f5",
    primary: "#03A9F4",
    secondary: "#FF8900",
    heading: "#3F749B",
    muted: "#f6f6f6",
    highlight: "#ffffcc",
    gray: "#777",
    purple: "#609",
  },
  fonts: {
    body: "Open Sans",
    heading: "Nunito Sans, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: "400",
    heading: "500",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading,
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6, 7],
      mt: 3,
    },
  },
  button: {
    outline: "none",
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.display",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    p: {
      fontSize: 2,
    },
    li: {
      fontSize: 2,
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 3,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 3,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      fontSize: 3,
      borderCollapse: "separate",
      borderSpacing: 0,
      [["th", "td"]]: {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
  },
  prism: {
    [[
      ".comment",
      ".prolog",
      ".doctype",
      ".cdata",
      ".punctuation",
      ".operator",
      ".entity",
      ".url",
    ]]: {
      color: "gray",
    },
    ".comment": {
      fontStyle: "italic",
    },
    [[
      ".property",
      ".tag",
      ".boolean",
      ".number",
      ".constant",
      ".symbol",
      ".deleted",
      ".function",
      ".class-name",
      ".regex",
      ".important",
      ".variable",
    ]]: {
      color: "heading",
    },
    [[".atrule", ".attr-value", ".keyword"]]: {
      color: "primary",
    },
    [[
      ".selector",
      ".attr-name",
      ".string",
      ".char",
      ".builtin",
      ".inserted",
    ]]: {
      color: "secondary",
    },
  },
}
