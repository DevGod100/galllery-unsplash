'use client'
import React, { useRef } from 'react'
import './UploadForm.css'
import Image from 'next/image'
import { validFiles } from '@/utils/validResult'


const UploadForm = React.memo(({setFiles}) => {
  const formRef = useRef()
  const handleInputChange = (files) => {
     if(!files.length) return;

     [...files].map(file => {
        const result = validFiles(file)
        setFiles(prev => [...prev, result])
     })

     formRef.current.reset()
  }

  const handleDrop = (e) => {
     e.preventDefault()
     const data = e.dataTransfer
     handleInputChange(data.files)
  }


  return (
    <form className='upload_form' ref={formRef} 
    onDrop={handleDrop} onDragOver={e => e.preventDefault()}>

      <input type='file' id='upload' accept='.png, .jpg' multiple hidden  
      onChange={e => handleInputChange(e.target.files)}
      />
      <label htmlFor='upload' className='upload_form_label'>
         <Image  src={'/addimg.png'} alt='bg-pic' height={40} width={130} sizes='25vw' 
         style={{width: 256, height: 256}}/>
         <h5>
          Drag &amp; drop up to <span>5 images</span> at once!
         </h5>
         <small>PNG, JPG - Max 1Mb</small>
      </label>
    </form>
  )
})

export default UploadForm