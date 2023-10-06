import React from 'react';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

interface Repo {
    id: number;
    name: string;
    description: string;
    stargazers_count : number;
    forks_count: number;
    watchers_count: number;
    // 필요한 다른 속성들도 여기에 추가할 수 있습니다.
}

interface ReposPageProps {
    repos: Repo[];
}

async function fetchRepos() {
    const response = await fetch(
        'https://api.github.com/users/bradtraversy/repos',
        {
            next: {
                revalidate: 60,
            },
        }
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const repos = await response.json();
    return repos;
}

const ReposPage: React.FC<ReposPageProps> = async ({repos}) => {
    repos =  await fetchRepos();

    return (
        <div className="repos-container">
            <h2>Repositories</h2>
            <ul className="repo-list">
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{ repo.name }</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar /> {repo.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch /> {repo.forks_count}
                                </span>
                                <span>
                                    <FaEye /> {repo.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ReposPage
