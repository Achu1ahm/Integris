import axios from "axios";

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const modelName = process.env.REACT_APP_MODEL_TWO;

export const sendMessageToChatGPT = async (message: string) => {
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };
  const data = {
    model: modelName,
    messages: [{ role: "user", content: message }],
  };

  try {
    // const response = await axios.post(endpoint, data, { headers });

    // return response.data.choices[0].text;
    const markdown = `# Gemini: The Twin Zodiac Sign ♊

Gemini is the third astrological sign in the zodiac, ruled by Mercury and symbolized by the twins. People born under Gemini are known for their versatility, wit, and curiosity.

---

## Key Traits of Gemini

| Trait | Description |
|--------------------|-----------------------------------------------------------------------------|
| **Element** | Air |
| **Quality** | Mutable |
| **Ruling Planet** | Mercury |
| **Symbol** | Twins |
| **Dates** | May 21 – June 20 |

---

## Famous Geminis 🌟
- **Marilyn Monroe**: Iconic actress and model.
- **Johnny Depp**: Acclaimed actor and producer.
- **Kanye West**: Influential rapper and music producer.

---

### Strengths of Gemini
- Excellent communication skills
- Highly adaptable and versatile
- Curious and eager to learn new things
- Quick-witted and humorous

### Weaknesses of Gemini
1. Can be indecisive
2. Sometimes lacks focus
3. Prone to mood swings
4. Restless and impatient

---

## Fun Facts About Gemini

1. Gemini is represented by **twins**, symbolizing duality and the ability to see multiple perspectives.
2. Its **lucky color** is yellow, representing energy and positivity.
3. The **birthstone** for Gemini is agate, believed to enhance communication and intellect.

---

### A Gemini Quote to Live By:
> "Gemini: The sign of infinite possibilities, duality, and boundless energy."

---

## Gemini Compatibility

| Zodiac Sign | Compatibility Level 🌟 |
|---------------------|------------------------|
| **Aries** | High |
| **Leo** | High |
| **Libra** | Medium |
| **Pisces** | Low |

---

## Resources to Learn More
- 🌐 [Astrology.com - Gemini](https://www.astrology.com)
- 📚 "The Only Astrology Book You'll Ever Need" by Joanna Martine Woolfolk

---

Explore your inner twin and embrace the endless possibilities! 🎉
`
return markdown;
  } catch (error) {
    console.error("Error sending message to ChatGPT:", error);
    throw error;
  }
};
