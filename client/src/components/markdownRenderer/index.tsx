import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Typography } from "@mui/material";
import "@app/styles";

interface MarkdownRendererProps {
  markdown: string;
  model: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ model, markdown }) => {
  return (
    <div className="markdown-renderer">
      <Typography variant="body2" className="model-name">{model}</Typography>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
