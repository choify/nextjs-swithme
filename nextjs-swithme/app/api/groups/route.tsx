import {NextResponse} from "next/server";
import { v4 as uuidv4 } from 'uuid';
import groups from './data.json';

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

export async function GET(request: Request,) {
    return NextResponse.json(groups);
}

export async function POST(request: Request,) {
    const {title, category_name, number_of_members, member_name, study_info, region_name} = await request.json();

    const newGroup: Group = {
        study_id: uuidv4(),
        title,
        category_name,
        number_of_members,
        member_name,
        study_info,
        study_status: 0,
        region_name,
    }

    groups.push(newGroup);

    return NextResponse.json(groups);
}