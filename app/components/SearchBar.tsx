"use client";
import { usePathname, useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search") || "";
    const pathname = usePathname();
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const query = formData.get("search") as string;

        const params = new URLSearchParams();
        if (query) {
            params.set("search", query);
        } else {
            params.delete("search");
        }
        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="search-bar w-full mx-4 flex items-center border border-gray-200 rounded p-2 px-3">
            <FaSearch className="text-gray-500 mr-2" />
            <input
                type="text"
                name="search"
                defaultValue={searchQuery}
                placeholder="Search recipes..."
                className="flex-grow p-2 outline-none border-none focus:outline-none"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 px-4 rounded ml-2 cursor-pointer">
                Search
            </button>
        </form>
    );
}
