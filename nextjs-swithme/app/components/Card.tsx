import React from 'react';

interface CardProps {
    params:{
        study_id: string;
        title: string;
        category_name: string;
        number_of_members: number;
        member_name: string;
        study_info: string;
        study_status: number;
        region_name: string;
    },
}

const getStatusLabel = (status: number) => {
    switch(status) {
        case 0:
            return "모집 진행중";
        case 1:
            return "모집 완료";
        case 2:
            return "스터디 종료";
        default:
            return "";
    }
};

const getStatusBg = (status: number) => {
    switch(status) {
        case 0:
            return "bg-green-500";
        case 1:
            return "bg-yellow-500";
        case 2:
            return "bg-gray-500";
        default:
            return "";
    }
};

const Card:React.FC<CardProps> = ({
  params: {
      study_id,
      title,
      category_name,
      number_of_members,
      member_name,
      study_info,
      study_status,
      region_name
  }
}) => {
    return (
        <div className="p-4 md:p-2">
            <div className="bg-white shadow-2xl rounded-lg p-10 relative">
                <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center gap-3">
                        <span className={`flex items-center ${getStatusBg(study_status)} text-white px-4 py-1 rounded-full font-semibold`}>{getStatusLabel(study_status)}</span>
                        <h1 className="font-bold text-xl mb-0">{title}</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <span className="bg-blue-500 text-gray-50 rounded-xl p-1">{region_name}</span>
                        <span className="bg-amber-500 text-gray-50 rounded-xl p-1">{category_name}</span>
                        <span className="bg-fuchsia-500 text-gray-50 rounded-xl p-1">{number_of_members}명</span>
                    </div>
                </div>
                <div className="mt-4 mb-2">
                    <p className="text-gray-700">{study_info}</p>
                </div>
                <div>
                    <span className="text-gray-600">작성자: <p className="inline-block font-semibold">{member_name}</p></span>
                </div>
            </div>
        </div>
    );
};
export default Card;
