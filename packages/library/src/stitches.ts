import { createStitches } from "@stitches/core";

export const { css } = createStitches({
  theme: {
    colors: { surface: "#EFF6FF", main: "#1E40AF" },
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
