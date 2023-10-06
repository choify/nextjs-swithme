import React from 'react';
import Link from "next/link";

interface Course {
    id: string;
    title: string;
    level: string;
    description: string;
    link: string;
}

interface CourseProps {
    courses: Course[];
}

const Courses:React.FC<CourseProps> = ({courses}) => {
    return (
        <div className="courses">
            {courses.map((course)=>(
                <div key={course.id} className="card">
                    <h2>{course.title}</h2>
                    <small>Level: {course.level}</small>
                    <p>{course.description}</p>
                    <Link href={course.link} target="_blank" className="btn">
                        Go To Course
                    </Link>
                </div>
            ))}
        </div>
    );
};
export default Courses;
