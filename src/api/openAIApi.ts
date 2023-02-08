import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export const generateApi: any = (keyword: string) => {
  return openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(keyword),
    temperature: 0.6,
  });
};

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
