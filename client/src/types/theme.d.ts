import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    scrollbar: {
      thumb: string;
      track: string;
    };
  }

  interface PaletteOptions {
    scrollbar?: {
      thumb?: string;
      track?: string;
    };
  }
}
