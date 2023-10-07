import React from 'react';
import { FaArrowRight, FaHeart } from "react-icons/fa";

const GroupPage = () => {
    return (
        <div className="p-8">
            <div className="flex justify-between bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold mb-2">리액트 같이 공부하실 분 모십니다.</h1>
                    <div className="flex space-x-2">
                        <span className="bg-blue-500 text-gray-50 rounded-xl p-1">강남구 서초동</span>
                        <span className="bg-amber-500 text-gray-50 rounded-xl p-1">개발 - 프론트엔드</span>
                        <span className="bg-fuchsia-500 text-gray-50 rounded-xl p-1">40/50명</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-200"><FaHeart /></button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">참여하기</button>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur doloribus explicabo inventore, laudantium quod repellendus veniam. Doloribus exercitationem maiores maxime neque repellendus sapiente sint tenetur. Asperiores assumenda fugiat repellendus!</p>
            </div>
            <div className="mt-6">
                <span className="text-green-800 font-semibold">댓글 3</span>
                <div className="flex mt-2 space-x-2">
                    <textarea className="flex-grow p-2 rounded-md border-gray-300 border-[2px]" placeholder="댓글을 입력해보세요!" />
                    <button className="p-2 rounded-full hover:bg-gray-200"><FaArrowRight /></button>
                </div>
            </div>
            <ul className="mt-6">
                <li className="p-4 border-b border-gray-300">
                    <div className="flex justify-between text-gray-600">
                        <span>작성자: UBiiiii</span>
                        <span>2023.03.02</span>
                    </div>
                    <p className="mt-2 text-gray-700">스터디 가입할까 하는데 시간은 언제쯤으로 생각하고 계시나연</p>
                </li>
            </ul>
        </div>
    );
};

export default GroupPage;
