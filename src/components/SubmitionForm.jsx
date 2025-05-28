import React, { useState } from "react";

const SubmitionForm = () => {
    const [pdf,setPdf] = useState(null);
    const [github,setGithub] = useState('')
    const [liveLink,setLiveLink] = useState('')

    const handleSubmit = (e)=>{
         e.preventDefault();
         const submission = { github,liveLink,
            pdfName: pdf?.name || "No file selected",
            submittedAt: new Date().toISOString
          }
        
          const existingData = JSON.parse(localStorage.getItem(submission)) || [];
          existingData.push(submission);
          localStorage.setItem("submissions",JSON.stringify(existingData));
          alert("submission saved to local storage")
          setPdf(null)
          setGithub('')
          setLiveLink('')
    }

  return (
    <form className="mt-6 space-y-4 bg-white shadow-md p-4 rounded-lg" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-semibold">
          Upload PDF (Project Report/Screenshot)
        </label>
        <input
          type="file"
          accept=".pdf"
          className="border border-gray-300 p-2 w-full rounded"
          onChange={(e)=> setPdf(e.target.files[0])  }
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">GitHub Repo Link</label>
        <input
          type="url"
          placeholder="https://github.com/username/project"
          className="border border-gray-300 p-2 w-full rounded"
          value={github}
          onChange={(e)=> setGithub(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Live Deployed Link</label>
        <input
          type="url"
          placeholder="https://yourproject.vercel.app"
          className="border border-gray-300 p-2 w-full rounded"
          value={liveLink}
          onChange={(e)=> setLiveLink(e.target.value) }
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit Task
      </button>
    </form>
  );
};

export default SubmitionForm;
