import React from 'react';

interface Comment {
  username: string;
  message: string;
  timeAgo: string;
}

const CommentSection: React.FC = () => {
  // Data dummy komentar
  const comments: Comment[] = [
    {
      username: 'calista raysa',
      message: 'congratulations teh ajengg, selamat menempuh hidup baru!! lancar sampe hari H yaa, sakinah mawaddah warohmah. HCommentSectionY WEDDING TEH AJENG & SUAMI 👰🏻‍♀️🤵🏻‍♂️',
      timeAgo: '3 bulan, 3 minggu lalu',
    },
    {
      username: 'Santia',
      message: 'Selamat menempuh hidup baru Teh Ajeng, semoga bahagia selalu.',
      timeAgo: '2 bulan lalu',
    },
    {
      username: 'Santia',
      message: 'Selamat menempuh hidup baru Teh Ajeng, semoga bahagia selalu.',
      timeAgo: '2 bulan lalu',
    },
  ];

  return (
    <div className="max-h-1/5 bg-white rounded-xl py-5 px-2">
      <h1 className="text-center text-xl font-bold text-maroon">Comments Section</h1>
      <div className="max-w-lg max-h-[440px] mx-auto mt-6 overflow-y-scroll">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-lg mb-4 shadow-md bg-white"
          >
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold">{comment.username}</p>
                <p className="text-sm text-gray-500">{comment.timeAgo}</p>
              </div>
            </div>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
