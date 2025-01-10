import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typography, Box } from "@mui/material";

interface MarkdownRendererProps {
  markdown: string;
  model: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ model, markdown }) => {
  return (
    <Box sx={markdownRendererStyles}>
      <Typography variant="body2" className="model-name">{model}</Typography>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;

const markdownRendererStyles = {
  fontFamily: "Arial, sans-serif",
  lineHeight: 1.6,
  width: "100%",
  margin: "15px",
  padding: "15px 25px",
  borderRadius: "10px",
  border: "1px solid #4f4f4f",
  "& .model-name": {
    textAlign: "end",
    marginBottom: "5px",
    color: "#6d6b6b",
  },
  "& h1, & h2, & h3, & h4, & h5, & h6, & p, & ul, & ol, & th, & td": {
    color: "text.primary",
  },
  "& p": {
    margin: "0.5em 0",
  },
  "& a": {
    color: "#0066cc",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "& ul, & ol": {
    margin: "1em 0",
    paddingLeft: "1.5em",
  },
  "& code": {
    color: "white",
    borderRadius: "4px",
    padding: "2px 4px",
    fontFamily: "'Courier New', Courier, monospace",
  },
  "& pre": {
    background: "black",
    padding: "10px",
    borderRadius: "4px",
    overflowX: "auto",
  },
  "& table": {
    borderCollapse: "collapse",
    width: "fit-content",
    borderRadius: "5px",
    "& th, & td": {
      border: "1px solid #525252",
      padding: "8px",
    },
    "& th": {
      backgroundColor: "#a0a0a0",
      textAlign: "left",
    },
  },
};
