import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Comments {
  name: string;
  message: string;
  created_at: string;
  attendance: string;
}

const CommentSection: React.FC<{ triggerFetch: boolean }> = ({ triggerFetch }) => {
  const [posts, setPosts] = useState<Comments[]>([]);
  const [summary, setSummary] = useState<{ hadir: number, tidakHadir: number, masihRagu: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/attendance/`;
      const res = await axios.get(url);
      setPosts(res.data.results);
      setSummary(res.data.attendanceSummary);
    } catch (err) {
      setError('Failed to fetch comments. Please try again later.');
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    if (triggerFetch) {

      fetchComments(); // Re-fetch comments when triggerFetch changes
    }
  }, [triggerFetch]);

  // Function to determine dot color based on attendance
  const getDotColor = (attendance: string) => {
    switch (attendance) {
      case 'Hadir':
        return 'bg-blue-500'; // Blue for 'Hadir'
      case 'Tidak Hadir':
        return 'bg-red-500'; // Red for 'Tidak Hadir'
      case 'Masih Ragu':
        return 'bg-gray-200'; // Gray for 'Masih Ragu'
      default:
        return 'bg-gray-200'; // Default to gray
    }
  };

  // Function to format the created_at timestamp

  const formatTimeAgo = (createdAt: string) => {
    const createdTime = new Date(createdAt).getTime();
    const currentTime = new Date().getTime();
    const diff = currentTime - createdTime;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (seconds < 5) {
      return 'Just now';
    } else if (seconds < 60) {
      return `${seconds} s ago`;
    } else if (minutes < 60) {
      return `${minutes} m ago`;
    } else if (hours < 24) {
      return `${hours} h ago`;
    } else if (days === 1) {
      return `1 day ago`;
    } else if (days < 30) {
      return `${days} days ago`;
    } else if (months === 1) {
      return `1 month ${days - 30} days ago`;
    } else {
      return `${months} months ago`;
    }
  };

  return (
    <div className="max-h-1/5 bg-white rounded-xl py-5 px-2">
      <h1 className="text-center text-xl font-bold text-maroon">Comments Section</h1>
      <div className='flex justify-center text-sm font-cardo text-maroon mt-2 gap-2 md:gap-4'>
        <div className='flex'>
          <div>Hadir : {summary?.hadir}</div>
        </div>
        <div className='flex'>
          <div>Tidak Hadir : {summary?.tidakHadir}</div>
        </div>
        <div className='flex'>
          <div>Masih Ragu : {summary?.masihRagu}</div>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {!error && (
        <div className="max-w-lg max-h-[440px] mx-auto mt-6 overflow-y-scroll">
          {posts.map((comment, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-lg mb-4 shadow-md bg-white"
            >
              <div className="flex items-center mb-2">
                {/* Dynamically set the dot color based on attendance */}
                <div className={`w-2 h-2 rounded-full mr-3 ${getDotColor(comment.attendance)}`}></div>
                <div>
                  <p className="font-semibold">{comment.name}</p>
                  <p className="text-sm text-gray-500">{formatTimeAgo(comment.created_at)}</p>
                </div>
              </div>
              <p>{comment.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
