import {v2 as cloudinary} from "cloudinary";
import fs from "fs";




    const uploadOnCloudinary = async (localFilePath) => {
       try {
        if(!localFilePath) return null

        // Configure Cloudinary here so process.env variables are fully loaded first
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET 
        });

            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
            });
            // file has been uploaded successfull 
            // console.log("file is ulpoaded on cloudinary",response.url);
            fs.unlinkSync(localFilePath)  // remove the locally saved temportary file as we have already uploaded it on cloudinary and we dont need it anymore  
            return response;
       } catch (error) {
        console.error("CLOUDINARY ERROR:", error);
        fs.unlinkSync(localFilePath)  // remove the locally saved temportary file as the upload operation got failed 
        return null;
       }
    }

    export { uploadOnCloudinary } 