import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY as string;
const modelName = process.env.REACT_APP_MODEL_ONE as string;

const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({model:modelName});


export default async function chatwithGemini(message:string){
    const prompt = await model.generateContent(message)
   
        
    return prompt.response.text()
}
