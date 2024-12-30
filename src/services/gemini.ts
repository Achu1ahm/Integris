import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"})


export default async function chatwithGemini(message:string){
    console.log("gemini called");
    const prompt = await model.generateContent(message)
    console.log();
    
    return prompt.response.text()
}
