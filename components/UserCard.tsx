import { FC } from "react";

const UserCard: FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl dark:bg-blue-950">
      <h1 className="text-3xl text-gray-400 mb-2">Hello !</h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Esther Howard</h2>
      <p className="text-sm text-gray-800 bg-gray-100 rounded-md px-2 py-1 inline-block mt-2 dark:bg-gray-300">
        esther-howard@gmail.com
      </p>
    </div>
  );
};

export default UserCard;
