import {NextResponse} from "next/server";
import groups from "../data.json";

export async function GET(request: Request){
    const {searchParams} = new URL(request.url);
    const query = searchParams.get('query') ?? '';
    const filteredCourses = groups.filter((group) => {
        return group.title.toLowerCase().includes(query.toLowerCase());
    });
    return NextResponse.json(filteredCourses);
}