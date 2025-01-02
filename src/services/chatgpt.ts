import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const sendMessageToChatGPT = async (message: string) => {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };
  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  };

  try {
    // const response = await axios.post(endpoint, data, { headers });
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

    // return response.data.choices[0].text;
    return markdownContent;
  } catch (error) {
    console.error("Error sending message to ChatGPT:", error);
    throw error;
  }
};
