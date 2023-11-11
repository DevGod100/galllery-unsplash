export const validFiles = (file) => {
    const imgTypes = ["image/jpeg", "image/png"];

    if(!file.type.startsWith('image')){
        return {
            status: 'error',
            errMsg: `This is NOT an image -${file.type}`,
            title: file.name,
            imgUrl: '/addimg.jpg'
        }
    }
    
    if(!imgTypes.includes(file.type)){
        return {
            status: 'error',
            errMsg: `This image format is incorrect (Not png or Jpeg)`,
            title: file.name,
            imgUrl: URL.createObjectURL(file)
        }
    }

    if(file.size > 1024 * 1042){
        return {
            status: 'error',
            errMsg: `This image is too big { ${file.size}bytes } (Must be less than 1mb)`,
            title: file.name,
            imgUrl: URL.createObjectURL(file)
        }
    }

    //Otherwise - i.e not problem file
    return {
        status: 'success',
        title: file.name.replace(/.(jpeg|jpg|png)$/gi, ''),
        tags: ["DevAT-VietNam"],
        public: false,
        imgUrl: URL.createObjectURL(file),
        fileUpload: file
    }
}