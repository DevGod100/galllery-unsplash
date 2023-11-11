"use client";
import UploadCard from "@/components/Cards/UploadCard/UploadCard";
import UploadForm from "@/components/forms/UploadForm/UploadForm";
import React, { useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState([])
  return (
    <div className="container">
      <UploadForm setFiles={setFiles}/>
      <div>
        {
          files.map((file, index) => (
            <UploadCard 
            key={index}
            file={file}
            setFiles={setFiles}
            index={index}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Upload;
