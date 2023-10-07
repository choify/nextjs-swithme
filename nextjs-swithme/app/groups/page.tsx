'use client';
import React, {useEffect, useState} from 'react';
import FilterButton from "@/app/components/FilterButton";
import CardList from "@/app/components/CardList";
import LoadingPage from "@/app/loading";
import CardSearch from "@/app/components/CardSearch";

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

const GroupsPage = () => {
    const [groups, setGroups] = useState<Group[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchGroups = async () => {
            const res = await fetch('/api/groups');
            const data = await res.json();
            setGroups(data);
            setLoading(false);
        }

        fetchGroups();
    }, []);

    if(loading){
        return <LoadingPage />;
    }

    return (
        <>
            <div className="flex flex-col justify-center p-4 md:p-8 min-h-[200px] border-b gap-4">
                <div className=" gap-4 sm:gap-8 flex pb-2 border-b-[2px] border-gray-300">
                    {['전체', '모집 중', '모집 완료'].map(label => (
                        <span key={label} className="cursor-pointer hover:font-bold">{label}</span>
                    ))}
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col justify-between gap-4 sm:gap-10 flex-1">
                        <div className="flex gap-2 sm:gap-4 justify-between">
                            <span className="self-center font-bold text-black-600">분야</span>
                            {['대분류', '소분류'].map(label => (
                                <FilterButton key={label} width={"w-72"}>{label}</FilterButton>
                            ))}
                            <span className="self-center font-bold text-black-600 ml-4">위치</span>
                            {['구', '동'].map(label => (
                                <FilterButton key={label} width={"w-72"}>{label}</FilterButton>
                            ))}
                        </div>
                    </div>
                </div>
                <CardSearch getCardResults={(results)=>setGroups(results)}/>
            </div>
            <CardList groups={groups}/>
        </>
    );
};

export default GroupsPage;
