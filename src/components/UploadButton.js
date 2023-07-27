// UploadButton.js
import React from 'react';
import axios from 'axios';

const UploadButton = (props) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    console.log("formData is", formData)

    // Make a POST request to your API to upload the file
    axios.post(`${props.URL}image-uploads`, formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default UploadButton;
