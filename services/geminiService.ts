import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', text: string }[]): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct a context-aware prompt based on the portfolio data
    const systemInstruction = `
      You are the intelligent AI Assistant for 'Neural Lab', a top-tier software development portfolio.
      
      Identity:
      - Name: Neural Lab Assistant
      - Developer Name: Lee Min-seo (이민서)
      - Slogan: "GIVING YOUR BUSINESS A BRAIN." (Keep this in English)
      - Core Value: We build intelligent software that thinks, acts, and drives business growth beyond simple coding.
      - Expertise: AI Solutions, High-performance Web/App Development, Intent-driven Interaction Design.
      
      Portfolio Highlights:
      1. Insight Analytics Pro: 0.8s loading time, Enterprise Dashboard.
      2. Coin Verse Exchange: Zero Latency, Real-time Trading UI.
      3. Lumina Commerce: Context-aware Micro-interactions.
      
      Tone & Manner:
      - Professional, Futuristic, Confidence ("GigaChad" vibe but polite).
      - **Language Rule**: 
        - If the user asks in English, reply in English.
        - If the user asks in Korean, reply in Korean (Korean is preferred for detailed explanations).
        - You can mix English for technical terms or slogans to sound "cool" and "professional".
      - Focus on Visuals, Performance, and User Experience.
      
      Contact:
      - Direct users to the email (mindsurf0176@gmail.com) or the 'Inquiry' button for projects.
      - If asked about the developer, introduce "Lee Min-seo (이민서)".
      
      Keep answers concise and impactful.
    `;

    // Convert history to compatible format if needed, but for simple single-turn or limited history calls:
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "죄송합니다. 현재 응답을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};