import React from 'react'

const CreatePage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Form submission logic
    }

    return (
        <form className="flex flex-col w-full space-y-4 p-4">
            <div>
                <label className="block mb-1 font-bold">스터디 명</label>
                <input type="text" placeholder="제목을 입력해주세요." className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-2">
                <span className="font-bold">스터디 위치</span>
                <div className="flex space-x-2">
                    <input type="text" placeholder="구" className="flex-1 p-2 border rounded" />
                    <input type="text" placeholder="동" className="flex-1 p-2 border rounded" />
                </div>
            </div>
            <div className="space-y-2">
                <span className="font-bold">스터디 종류</span>
                <div className="flex items-center space-x-2">
                    <input type="radio" name="studyType" className="form-radio" />
                    <label>온라인</label>
                    <input type="radio" name="studyType" className="form-radio" />
                    <label>오프라인</label>
                </div>

            </div>
            <div className="space-y-2">
                <label className="block mb-1 font-bold">목표 인원</label>
                <input type="number" className="w-full p-2 border rounded" />
            </div>
            <div className="space-y-2">
                <label className="block mb-1 font-bold">카테고리</label>
                <div className="flex items-center space-x-2">
                    <input type="text" placeholder="대분류" className="w-full p-2 border rounded" />
                    <input type="text" placeholder="소분류" className="w-full p-2 border rounded" />
                </div>
            </div>
            <div>
                <label className="block mb-1 font-bold">스터디 설명</label>
                <textarea className="w-full p-2 border rounded" rows={4}></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">스터디 등록</button>
            </div>
        </form>
    )
}

export default CreatePage;
