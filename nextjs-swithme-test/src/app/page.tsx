'use client';
import React, {useState, useEffect} from 'react'
import LoadingPage from "@/app/loading";
import Courses from "@/app/components/Courses";
import CourseSearch from "@/app/components/CourseSearch";

type Course = {
    id: string;
    title: string;
    level: string;
    description: string;
    link: string;
};

const HomePage = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchCourses = async () => {
            const res = await fetch('/api/courses');
            const data = await res.json();
            setCourses(data);
            setLoading(false);
        }

        fetchCourses();
    }, []);

    if(loading){
        return <LoadingPage />;
    }

    return (
        <>
            <h1>Welcome To Traversy Media</h1>
            <CourseSearch getSearchResults={(results) => setCourses(results)} />
            <Courses courses={courses} />
        </>
    )
}
export default HomePage
