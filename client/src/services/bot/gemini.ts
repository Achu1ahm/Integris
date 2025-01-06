import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY as string;
const modelName = process.env.REACT_APP_MODEL_ONE as string;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: modelName });

export default async function chatwithGemini(message: string) {
  // const prompt = await model.generateContent(message)

  // return prompt.response.text()
  const markdownContent = `
# Welcome to Markdown World

Markdown is a lightweight markup language that you can use to format plain text. It's simple, powerful, and perfect for documentation or web writing.

---

## Features of Markdown
- **Easy to Read**: Write plain text that translates into formatted text.
- **Flexible**: Supports headings, lists, links, and images.
- **Portable**: Works almost everywhere, from GitHub to blogging platforms.

---

## Example Syntax
Here's how you can use Markdown:

### Headings
\`\`\`markdown
# H1
## H2
### H3
\`\`\`

### Lists
- Unordered list item
- Another item
- Nested item

1. Ordered item
2. Second item

### Links
\`\`\`markdown
[Visit Markdown Guide](https://www.markdownguide.org)
\`\`\`

### Code Blocks
\`\`\`python
def hello_world():
print("Hello, World!")
\`\`\`

---

## Why Use Markdown?
> "Markdown is the easiest way to create well-structured text files with minimal effort." 
> - Someone Wise

---

## Resources
- [Markdown Guide](https://www.markdownguide.org)
- [GitHub Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Happy writing! 🎉
`;

  return markdownContent;
}
