import { GoogleGenAI } from "@google/genai";
import fs from "fs";

async function generate() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'Create an ultra-realistic aerial drone photograph of a dramatic mountain landscape in Mindanao, Philippines. The scene shows a winding concrete road carving through lush, rolling green mountains with steep cliffs and deep valleys. The perspective is high-altitude drone view, wide-angle lens, capturing long serpentine road curves hugging the mountain ridges. Early morning atmosphere with soft natural lighting, light fog floating between distant mountain layers, cinematic depth, high dynamic range (HDR), ultra-detailed grass textures, realistic shadows, and vibrant but natural green tones. The mountains should appear vast and majestic with multiple layers fading into misty blue tones in the background. The road should be smooth and light gray, clearly visible as it curves dramatically across the hills. Style: hyper-realistic, 8K resolution, professional travel photography, National Geographic style, sharp focus, natural color grading, no people close-up, no heavy filters, realistic sky with soft clouds.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      const base64EncodeString = part.inlineData.data;
      fs.writeFileSync('public/highlands.png', Buffer.from(base64EncodeString, 'base64'));
      console.log('Image saved to public/highlands.png');
      break;
    }
  }
}

generate().catch(console.error);
