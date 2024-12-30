"use client";
import { useEffect, useState } from "react";
import { Eye, GitFork, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the type for a repository
interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  watchers_count: number;
  stargazers_count: number;
  forks_count: number;
}

export default function GithubPage() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch("https://api.github.com/users/imhuy/repos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Repository[] = await response.json();
        setRepositories(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className='h-full bg-[#1E1E1E] relative overflow-hidden overflow-y-auto p-4 sm:p-8'>
      {/* Profile Header */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8'>
        <Image src='/images/avatar.jpg' alt='CrazyDevTalks' width={80} height={80} className=' size-20 rounded-full' />
        <div>
          <h1 className='text-xl sm:text-2xl font-mono text-white mb-2'>imhuy</h1>
          <div className='flex gap-2 sm:gap-4 text-sm sm:text-base text-gray-400'>
            <span>{repositories.length} repos public</span>
            <span>4 followers</span>
          </div>
        </div>
      </div>

      {/* Error Handling */}
      {loading && <p className='text-gray-400'>Loading repositories...</p>}
      {error && <p className='text-red-500'>{error}</p>}

      {/* Repository Grid */}
      {!loading && !error && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {repositories.map((repo) => (
            <div key={repo.id} className='border border-gray-800 rounded-lg p-4 bg-[#252526]'>
              <Link href={repo.html_url} className='text-[#FF9A8B] hover:underline font-mono mb-2 block'>
                {repo.name}
              </Link>
              <p className='text-gray-400 text-sm mb-4'>{repo.description || "No description provided."}</p>
              <div className='flex gap-4 text-gray-500 text-sm'>
                <span className='flex items-center gap-1'>
                  <Eye size={16} />
                  {repo.watchers_count || 0}
                </span>
                <span className='flex items-center gap-1'>
                  <Star size={16} />
                  {repo.stargazers_count || 0}
                </span>
                <span className='flex items-center gap-1'>
                  <GitFork size={16} />
                  {repo.forks_count || 0}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contribution Graph */}

      <div className='mt-8 border border-gray-800 rounded-lg p-4 bg-[#252526]'>
        <span className='font-bold py-4 block'>593 contributions in the last year</span>
        <div
          className='grid gap-1 mt-4'
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(10px, 1fr))`,
          }}
        >
          {Array.from({ length: 593 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-sm ${Math.random() > 0.9 ? "bg-green-500" : "bg-gray-800"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
