'use client';

import {BiPlus} from "react-icons/bi";
import Link from "next/link";

const Search = () => {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition">
            <div className="flex flex-row items-center justify-between ">
                <Link href='/groups'>
                    <div className="text-sm font-semibold px-6">전체 스터디</div>
                </Link>
                <Link href='/groups'>
                    <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">근처 스터디</div>
                </Link>
                <div className=" text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 cursor-pointer">
                    <div className="hidden sm:block font-semibold">스터디 생성</div>
                    <div className="p-2 bg-[#0f3f27] rounded-full text-white"><BiPlus size={18} /></div>
                </div>
            </div>
        </div>
    );
};

export default  Search;
