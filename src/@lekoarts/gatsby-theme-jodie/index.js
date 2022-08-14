import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
  fonts: {
    body: `Great Vibes`,
  },
});

export default theme;