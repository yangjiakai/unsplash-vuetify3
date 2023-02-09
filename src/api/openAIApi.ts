import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//
export const generateApi: any = (keyword: string) => {
  return openai.createCompletion({
    model: "text-davinci-003",
    // prompt: generatePrompt(keyword),
    prompt: keyword,
    temperature: 0.6,
    max_tokens: 100,
  });
};

// openai.listModels
// https://platform.openai.com/docs/api-reference/models/list

// openai.retrieveModel
// GET https://api.openai.com/v1/models/{model}

function generatePrompt(animal: string) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.
  
  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${capitalizedAnimal}
  Names:`;
}

export const createImageApi: any = () => {
  return openai.createImage({
    prompt:
      "Football club logo. Flat design. Modern. Energetic. Blue and green. White/black stroke.",
    n: 1,
    size: "1024x1024",
  });
};
