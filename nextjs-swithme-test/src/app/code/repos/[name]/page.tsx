import React, {Suspense} from 'react';
import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";

interface RepoPageProps {
    params: {
        name: string;
    };
}

const RepoPage: React.FC<RepoPageProps> = ({params: {name}}) => {
    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">
                Back To Repositories
            </Link>
            <Suspense fallback={<div>Loading rep...</div>}>
                <Repo name={name}/>
            </Suspense>
            <Suspense fallback={<div>Loading directories...</div>}>
                <RepoDirs name={name}/>
            </Suspense>
        </div>
    );
};
export default RepoPage;
