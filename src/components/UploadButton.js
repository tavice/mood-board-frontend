// UploadButton.js
import React, {useEffect, useState} from "react";
import axios from "axios";

const UploadButton = (props) => {
    const [fileName, setFileName] = useState("");


  const handleUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    console.log("formData is", formData);

    // Make a POST request to your API to upload the file
    axios
      .post(`${props.URL}image-uploads`, formData)
      .then((res) => {
        console.log(res.data);
        const imageUrl = res.data.file.Location;

        // Define the data for the new mood board or item
        const newMoodBoardData = {
          name: fileName,
          items: [
            {
              type: "image",
              content: imageUrl,
              position: {
                x: 0,
                y: 0,
              },
              size: {
                width: 100,
                height: 100,
              },
              rotation: 0,
            },
          ],
        };

        // Make a POST request to your API to create a new mood board or item
        axios
          .post(`${props.URL}mood-boards`, newMoodBoardData)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("fileName is", fileName);
  }, [fileName]);

  //
  return (
    <div>
        <h2>Upload an image</h2>
        <input type="text" placeholder='enter file name' value={fileName} onChange={(event) => setFileName(event.target.value)} />
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default UploadButton;
