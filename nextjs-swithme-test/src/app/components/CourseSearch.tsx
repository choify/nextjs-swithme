'use client';
import React, {useState} from 'react';
import courses from "@/app/components/Courses";

type Course = {
    id: string;
    title: string;
    level: string;
    description: string;
    link: string;
};

type CourseSearchProps = {
    getSearchResults: (course: Course[]) => void;
};

const CourseSearch: React.FC<CourseSearchProps> = ({getSearchResults}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(
            `/api/courses/search?query=${query}`
        );
        const courses = await res.json();
        console.log(courses);
        getSearchResults(courses);
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text"
                   className="search-input"
                   placeholder="Search Courses..."
                   value={query}
                   onChange={(e)=>setQuery(e.target.value)}
            />
            <button className="search-button" type="submit">
                Search
            </button>
        </form>
    );
};
export default CourseSearch;
