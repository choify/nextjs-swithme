'use client';
import React, { useEffect, useState } from 'react';
import Link from "next/link";

interface Content {
    type: string;
    path: string;
};

interface RepoDirsProps {
    name: string;
}

const fetchRepoContents = async (name: string) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(
        `https://api.github.com/repos/bradtraversy/${name}/contents`
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const RepoDirs: React.FC<RepoDirsProps> = ({ name }) => {
    const [dirs, setDirs] = useState<Content[]>([]);

    useEffect(() => {
        fetchRepoContents(name).then(contents => {
            const dirs = contents.filter((content: Content) => content.type === 'dir');
            setDirs(dirs);
        }).catch(error => {
            console.error("There was an error fetching the repo contents:", error);
        });
    }, [name]);

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RepoDirs;
