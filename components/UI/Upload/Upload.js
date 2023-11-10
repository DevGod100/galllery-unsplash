"use client";
import UploadForm from "@/components/forms/UploadForm/UploadForm";
import React, { useState } from "react";

const Upload = () => {
  const [files, setFiles] = useState([])
  return (
    <div className="container">
      <UploadForm setFiles={setFiles}/>
    </div>
  );
};

export default Upload;
