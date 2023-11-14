'use server'

import { uploadToCloudinary } from "@/utils/cloudinary"
import getServerUser from "@/utils/getServerUser"


export async function uploadPhotos(formData, filesUpload){
    try {
        const user = await getServerUser()
        if(!user) throw new Error('Unauthorized!')

        // User is true and uploaded files
        const files = formData.getAll('files')

        const photos = await uploadToCloudinary(files, user?._id)

    } catch (error) {
        return {errMsg: error.message}
    }
}