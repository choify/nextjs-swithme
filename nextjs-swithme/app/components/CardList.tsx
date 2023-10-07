import React from 'react';
import Link from "next/link";
import Card from "@/app/components/Card";

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

interface GroupProps {
    groups: Group[];
}

const CardList:React.FC<GroupProps> = ({groups}) => {
    return (
        <ul>
            {groups.map((group)=>(
                <li key={group.study_id}>
                    <Link href={`/groups/${group.study_id}`}>
                        <Card params={group} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
export default CardList;
