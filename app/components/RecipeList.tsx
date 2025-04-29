import { prisma } from "@/lib/db";
import { getEmbeddings } from "@/prisma/generate-embeddings";
import { useEffect, useState } from "react";

type Recipe = {
    title: string;
    description: string;
};

export default async function RecipeList({ searchQuery }: { searchQuery: string }) {
    /**  1. query the database for recipes based on the search query
    const results = await prisma.recipe.findMany({
        where: {
            description: {
    const res = await prisma.$runCommandRaw<MongoCommandResponse>({
                mode: "insensitive",
            },
        },
    });
    */
    /** 2. use the $search command to perform a full-text search
     * on both the title and description fields
     * use the fuzzy search option to allow for typos
     const res = await prisma.$runCommandRaw({
        aggregate: "recipes",
        pipeline: [
            {
                $search: {
                    index: "default",
                    text: {
                        query: searchQuery,
                        path: ["title", "description"],
                        fuzzy: {
                            maxEdits: 2, // Allow up to 2 typo errors
                            prefixLength: 1, // Require at least first 1 character to match
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 1,
                    title: 1,
                    description: 1,
                    score: { $meta: "searchScore" },
                },
            },
            { $limit: 10 },
        ],
        cursor: {},
    });

    //@ts-ignore
    const results = (res.cursor?.firstBatch as Recipe[]) || [];
    */

    /** 3. Vector Embeddings for semantic search */
    const queryEmbedding = await getEmbeddings(searchQuery);
    const res = await prisma.$runCommandRaw({
        aggregate: "recipes",
        pipeline: [
            {
                $vectorSearch: {
                    index: "vector_index",
                    path: "embeddings",
                    queryVector: queryEmbedding,
                    numCandidates: 100,
                    limit: 6,
                },
            },
            {
                $project: {
                    title: 1,
                    description: 1,
                    score: { $meta: "searchScore" },
                },
            },
            { $limit: 10 },
        ],
        cursor: {},
    });

    //@ts-ignore
    const results = (res.cursor?.firstBatch as Recipe[]) || [];

    return (
        <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {results.length > 0 ? (
                results.map((recipe, index) => (
                    <div key={index} className="p-4 rounded shadow-md">
                        <h2 className="font-bold text-lg">{recipe.title}</h2>
                        <hr className="my-2 border-gray-300" />
                        <p>{recipe.description}</p>
                        <hr className="my-2 border-gray-300" />
                        <a href="#" className="text-blue-500 underline block mt-2">
                            View Recipe
                        </a>
                    </div>
                ))
            ) : (
                <p className="col-span-full text-center">No recipes found.</p>
            )}
        </div>
    );
}
