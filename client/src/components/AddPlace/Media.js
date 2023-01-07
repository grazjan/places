import styled from '@emotion/styled'
import { Paper, Typography } from '@mui/material'
import Dropzone from 'react-dropzone'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileBase64 from 'react-file-base64';
import { useEffect, useState } from 'react';
import { useUploadFileMutation } from '../../features/apiSlice';

const StyledUpload = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  cursor: 'pointer',
  '& .MuiSvgIcon-root': {
    fontSize: "4rem"
  },
  '& .preview-upload': {
    margin: theme.spacing(1),
    borderRadius: theme.spacing(2),
  }
}));

const Media = ({ handleForm, handleUpload, formData }) => {

  const [images, setImages] = useState([]);

  const [ 
    uploadFile,
    {data: file,
    isLoading,
    isSuccess,
    isError
    }
  ] = useUploadFileMutation();

  const handleOnDrop = (files) => {
    files.forEach((file) => {
      let form = new FormData();
      form.append("file", file, file.name);
      uploadFile(form)
    })
  }

  useEffect(() => {
    /* Set uploaded URL to the state */
    if(file && file.path) handleUpload(`http://localhost:8080/${file.path}`)
  }, [file])

  return (
    <>
    <Dropzone onDrop={handleOnDrop}>
      {({getRootProps, getInputProps}) => (
        <StyledUpload elevation={2}>
          <div {...getRootProps()}>
            <input {...getInputProps()} name="image" />
            <FileUploadOutlinedIcon/>
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>

          {/* Preview */}
          {formData && formData.images.map((img, index) => (
            <img key={index} className="preview-upload" src={img} width="150" height="150" alt="Preview image"/>
          )) 
          }

        </StyledUpload>
      )}
    </Dropzone>
 
    {/* Preview */}
    {isError && 
        <Typography pt={5} variant="body1" textAlign="center">Connection Error - Please try again</Typography>
    }

    </>
  )
}

export default Media