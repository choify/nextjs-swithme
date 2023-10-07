'use client';
import React, {useState} from 'react';
import FilterButton from "@/app/components/FilterButton";

interface Group {
    study_id: string;
    title: string;
    category_name: string;
    number_of_members: number;
    member_name: string;
    study_info: string;
    study_status: number;
    region_name: string;
}

interface CardSearchProps {
    getCardResults: (group: Group[]) => void;
}

const CardSearch: React.FC<CardSearchProps> = ({getCardResults}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(
            `/api/groups/search?query=${query}`
        );
        const groups = await res.json();
        console.log(groups);
        getCardResults(groups);
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full items-center">
            <input type="text"
                   placeholder="관심 스터디를 검색해보세요!"
                   className="p-2 rounded border shadow-md flex-grow mr-6"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
            />
            <FilterButton
                bgColor="bg-green-500"
                hoverColor="hover:bg-green-600"
                rounded="rounded-xl"
                text="text-gray-50">
                검색
            </FilterButton>
        </form>

    );
};
export default CardSearch;