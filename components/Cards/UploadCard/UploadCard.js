"use client";

import React from "react";
import "./UploadCard.css";
import Image from "next/image";

const UploadCard = ({ file, setFiles, index }) => {
  const validate = ({ title, tags }) => {
    const errors = {};

    if (title.length > 100) {
      errors.title = "too long...😔";
    } else {
      errors.title = "";
    }

    if (tags.length > 5) {
      errors.tags = "too many tags...😔";
    } else {
      errors.tags = "";
    }

    return errors?.title || errors?.tags ? "error" : "success";
  };

  const handleChangeTitle = (e) => {
    const { value } = e.target;
    const newFile = {
      ...file,
      title: value,
      status: validate({ title: value, tags: file?.tags }),
    };
    setFiles(files => files.map((item, i) => i === index ? newFile : item))
  };

  const handleInputTags = (e) => {
    if(e.key === "Enter" || e.key === ','){
        let tag  = e.target.value.trim().replaceAll(/\s+/g, ' ').replaceAll(',', '')
        if(tag.length > 1 && !file?.tags?.includes(tag)){
            const newFile ={
                ...file,
                tags: [...file.tags, tag],
                status: validate({title: file?.title, tags: [...file.tags, tag]})
            }
    setFiles(files => files.map((item, i) => i === index ? newFile : item))
        }
         // failed tag...
        e.target.value = '';
    }
  }

  const handleRemoveTag = (tag) => {
    const newTags = file.tags.filter(t => t !== tag)

    const newFile = {
        ...file,
        tags: newTags,
        status: validate({title: file?.title,  tags: newTags,})
    }
    setFiles(files => files.map((item, i) => i === index ? newFile : item))

  }

  const handleChangePublic = () => {
      setFiles(files => files.map((item, i) => 
      i === index ? {...file, public: !file.public}  : item
      ))
  }

  const handleRemoveFile = () =>{
    setFiles(files => files.filter((_, i) => i !== index ))
  }

  console.log(upload-card);

  return (
    <div className={`upload_card ${file?.status}`}>
      <Image
        src={file?.imgUrl}
        alt={file?.title || "img"}
        width={280}
        height={280}
        title={file?.title}
      />
      {file?.errMsg ? (
        <div className="up_c_error_box">
          <h4>{file?.status}</h4>
          <span>{file?.errMsg}</span>
        </div>
      ) : (
        <div className="up_c_success_box">
          <div className="up_c_s_group" title={`${file?.title?.length} / 100`}>
            <input
              type="text"
              autoComplete="off"
              placeholder="Add a title"
              defaultValue={file?.title}
              onChange={handleChangeTitle}
            />
          </div>
          <div className="up_c_s_tags" title={`${file?.tags?.length} / 5`}>
            {file?.tags?.map((tag) => (
              <div key={tag}>
                <span>{tag}</span>
                <i className="material-icons" onClick={() => handleRemoveTag(tag)}>close</i>
              </div>
            ))}

            <input type="text" autoComplete="off" onKeyUp={handleInputTags}/>
          </div>

          <label className="up_c_s_public">
            <input type="checkbox" checked={file?.public} onChange={handleChangePublic}/>

            <span>Make Photo Public</span>
            <i className="material-icons">lock</i>
          </label>
        </div>
      )}

      <button className="c_btn_close" onClick={handleRemoveFile}>
        <i className="material-icons">close</i>
      </button>
    </div>
  );
};

export default UploadCard;
