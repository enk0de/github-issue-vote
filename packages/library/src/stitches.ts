import { createStitches } from "@stitches/core";
import COLORS from "./colors";

export const { css } = createStitches({
  theme: {
    colors: COLORS,
    radii: { full: "99999px" },
    space: { normal: ".4em", extra: "1em" },
  },
  utils: {
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
