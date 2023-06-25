
import React, { useState } from 'react'
import { fetchApi,baseUrl } from '../../utils/fetchApi'

import { Uploader } from "uploader";
import { UploadDropzone,UploadButton } from "react-uploader";

// Initialize once (at the start of your app).

const uploader = Uploader({ apiKey: "public_W142hzBE4sj6JPVjh3KruK2CCKQZ" }); // Your real API key.
const uploaderOptions = {
  multi: true,

  // Comment out this line & use 'onUpdate' instead of
  // 'onComplete' to have the dropzone close after upload.
  showFinishButton: true,
  styles: {
    colors: {
      primary: "#006180"
    }
  }
}
const ImagesUpload = ({PropertyId,imageFiles,setImageFiles}) => {
  // console.log(agentsDetails)
  console.log(typeof JSON.stringify(imageFiles))
  console.log( JSON.stringify(imageFiles))

const uploadMulti = 
<UploadDropzone uploader={uploader}
options={uploaderOptions}
onUpdate={files => files.map(x => {
          setImageFiles([...imageFiles,x.fileUrl]) 
          } )
          }
onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
width="600px"
height="375px"
/>
    return (
      <>
  {uploadMulti}

<UploadButton uploader={uploader}
                options={{ multi: true }}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        
      </button>
    }
  </UploadButton>

      </>
)}

export default ImagesUpload;