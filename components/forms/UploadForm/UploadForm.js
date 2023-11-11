'use client'
import { useRef } from 'react'
import './UploadForm.css'
import Image from 'next/image'

const UploadForm = ({setFiles}) => {
  const formRef = useRef()
  return (
    <form action='' className='upload_form'>
      <input type='file' id='upload' accept='.png, .jpg' multiple hidden/>
      <label htmlFor='upload' className='upload_form_label'>
         <Image  src={'/empty.png'} height={40} width={130} sizes='25vw' 
         style={{width: 136, height: 96}}/>
      </label>
    </form>
  )
}

export default UploadForm