import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
export async function getEmbeddings(text: string): Promise<number[]> {
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: text,
        });

        const embeddings = response.data[0].embedding;
        return embeddings;
    } catch (error) {
        console.error("Error generating embeddings:", error);
        throw new Error("Failed to generate embeddings");
    }
}

async function generateEmbeddings() {
    console.log("Generating embeddings...");

    try {
        const recipes = await prisma.recipe.findMany();
        console.log("Recipes fetched:", recipes.length);

        const batchSize = 5;
        for (let i = 0; i < recipes.length; i += batchSize) {
            const batch = recipes.slice(i, i + batchSize);
            console.log(
                `Processing batch ${i / batchSize + 1} of ${Math.ceil(
                    recipes.length / batchSize
                )}`
            );

            const updates = batch.map(async recipe => {
                try {
                    // Generate embeddings for the recipe description
                    const embeddings = await getEmbeddings(recipe.description);
                    // Update the recipe with the generated embeddings

                    await prisma.recipe.update({
                        where: { id: recipe.id },
                        data: { embeddings },
                    });
                    console.log(`Updated recipe ${recipe.title} with embeddings`);
                } catch (error) {
                    console.error(`Error updating recipe ${recipe.title}:`, error);
                }
            });
            // Wait for all updates in the batch to complete
            await Promise.all(updates);

            // add a small delay to avoid hitting the rate limit
            console.log(`Waiting for 2 seconds before processing the next batch...`);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        console.log("All recipes updated with embeddings");
    } catch (error) {
        console.error("Error generating embeddings:", error);
        throw new Error("Failed to generate embeddings");
    }
}

generateEmbeddings().catch(error => {
    console.error("Error in generateEmbeddings:", error);
    process.exit(1);
});
