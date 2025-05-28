import React, { useState } from "react";
import { frontendTasks } from "../../utils/tasks";
import SubmitionForm from "../../components/SubmitionForm";

const Frontend = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Frontend Developer Virtual Internship
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Tasks:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {frontendTasks.map((task, index) => (
            <li key={index} className="hover:text-blue-600 transition-all">
              {task}
            </li>
          ))}
        </ul>
      </div>
      <SubmitionForm />
    </div>
  );
};

export default Frontend;
