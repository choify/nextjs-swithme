'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

interface Dir{
    path: string;
}

interface Content {
    type: string;
    path: string;
};

interface RepoDirsProps {
    name: string;
}

const fetchRepoContents = async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
        `https://api.github.com/repos/bradtraversy/${name}/contents`,
        {
            next: {
                revalidate: 60,
            },
        }
    );
    const contents = await response.json();
    return contents;
};

const RepoDirs: React.FC<RepoDirsProps> = async ({ name }) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter((content: Content) => content.type === 'dir');

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir: Dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RepoDirs;
