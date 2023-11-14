import path from 'path'
import fs from 'fs/promises'
import os from 'os'
import cloudinary from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  export async function uploadToCloudinary(files, userId){
    console.log({files, userId});
  }