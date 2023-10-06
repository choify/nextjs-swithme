import {NextResponse} from "next/server";
import { v4 as uuidv4 } from 'uuid';
import courses from './data.json';

export async function GET(request: Request,) {
    return NextResponse.json(courses);
};

export async function POST(request: Request,) {
    const {title, description, level, link} = await request.json();

    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    }

    courses.push(newCourse);

    return NextResponse.json(courses);
}