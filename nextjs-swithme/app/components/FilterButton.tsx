import React from 'react'

interface FilterButtonProps {
    children: React.ReactNode;
    bgColor?: string;
    hoverColor?: string;
    width?: string;
    rounded?: string;
    text?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
                                                       children,
                                                       bgColor = 'bg-gray-100',
                                                       hoverColor = 'hover:bg-gray-400',
                                                       width = "",
                                                       rounded = "rounded-3xl",
                                                       text = "text-gray-500"
                                                   }) => {
    return (
        <button
            className={`py-2 px-4 border border-gray-400 ${rounded} ${text} font-semibold ${bgColor} ${hoverColor} ${width} transition`}>
            {children}
        </button>
    );
};
export default FilterButton;
