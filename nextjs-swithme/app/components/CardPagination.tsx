import React from 'react'

interface CardPaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    maxPage: number;
}

const CardPagination: React.FC<CardPaginationProps> = ({ currentPage, setCurrentPage, maxPage }) => {
    let startPage = Math.max(currentPage - 4, 1);
    let endPage = Math.min(startPage + 8, maxPage);

    if (currentPage > maxPage - 4) {
        startPage = maxPage - 8;
        endPage = maxPage;
    }

    const handleNextPage = () => {
        setCurrentPage((prev: number) => Math.min(maxPage, prev + 1));
    }

    const handlePrevPage = () => {
        setCurrentPage((prev: number) => Math.max(1, prev - 1));
    }

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);

    return (
        <div className="mt-4 flex justify-center">
            {currentPage > 1 && (
                <button onClick={handlePrevPage} className="hover:font-bold">이전</button>
            )}
            {pageNumbers.map(number => (
                <span
                    key={number}
                    className={`mx-1 ${number === currentPage ? 'font-bold' : ''} hover:font-bold cursor-pointer`}
                    onClick={() => setCurrentPage(number)}
                >
                        {number}
                    </span>
            ))}

            {currentPage < maxPage && (
                <button onClick={handleNextPage} className="hover:font-bold">다음</button>
            )}
        </div>
    )
}
export default CardPagination
