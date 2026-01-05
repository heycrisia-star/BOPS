
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";

export interface BlueprintSuggestion {
  problem: string;
  solution: string;
  tools: string[];
}

// Función para obtener el cliente configurado
const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getOpsBlueprint = async (problem: string): Promise<BlueprintSuggestion> => {
  const ai = getClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analiza este problema operativo y diseña una solución de ingeniería de sistemas: "${problem}"`,
    config: {
      systemInstruction: `Eres el Lead Architect de BuildersOps. Tu misión es transformar caos operativo en sistemas elegantes y automatizados. 
      Cuentas con un trasfondo de 15 años de experiencia en gestión operativa en sectores de Petróleo, Retail y Casual Dining. 
      Responde siempre en español, de forma profesional, directa y técnica. 
      Tu respuesta DEBE ser un objeto JSON válido.`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          problem: { type: Type.STRING, description: "Resumen ejecutivo del problema detectado" },
          solution: { type: Type.STRING, description: "Explicación técnica de la automatización propuesta" },
          tools: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Stack tecnológico recomendado (ej: Make, Airtable, OpenAI API, WhatsApp Business API)"
          }
        },
        required: ["problem", "solution", "tools"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}') as BlueprintSuggestion;
  } catch (e) {
    throw new Error("No se pudo procesar la solicitud arquitectónica.");
  }
};

export async function* streamGeminiChat(message: string) {
  const ai = getClient();
  const result = await ai.models.generateContentStream({
    model: 'gemini-3-pro-preview',
    contents: message,
    config: {
      systemInstruction: `Eres el Lead Architect de BuildersOps. Representas a Cristian Gutiérrez, un experto con 15 años de experiencia en dirección operativa en Petróleo, Retail y Casual Dining, y 3 años especializado en IA y automatización.
      Tu tono es profesional, senior, directo y enfocado en la rentabilidad operativa. 
      No hablas solo de herramientas, hablas de procesos robustos, escalabilidad y eliminación de fricción.
      Responde siempre en español.`,
      thinkingConfig: { thinkingBudget: 32768 }
    },
  });

  for await (const chunk of result) {
    yield chunk.text;
  }
}
