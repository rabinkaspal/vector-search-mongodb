import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

type HomeProps = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
};

export default async function Home({ searchParams }: HomeProps) {
    const query = ((await searchParams).search as string) || "";
    return (
        <div className="min-h-screen p-8 flex flex-col items-center w-4/5 mx-auto">
            <h1 className="text-3xl font-bold mb-4">Recipe Finder</h1>
            <p className="text-gray-600 mb-4">
                Find your favorite recipes from our collection.
            </p>
            <Suspense>
                <SearchBar />
            </Suspense>

            <Suspense key={query} fallback={<div>Loading recipes...</div>}>
                <RecipeList searchQuery={query} />
            </Suspense>
        </div>
    );
}
