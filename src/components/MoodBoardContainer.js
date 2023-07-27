// MoodBoardContainer.js
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MoodBoard from "./MoodBoard";

const MoodBoardContainer = (props) => {
  const [moodBoards, setMoodBoards] = useState([]);

  const getMoodBoards = useCallback(async () => {
    try {
      const res = await axios.get(`${props.URL}mood-boards`);

      console.log("data is", res.data);
      setMoodBoards(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [props.URL]);

  useEffect(() => {
    getMoodBoards();
  }, [getMoodBoards]);

  console.log("moodBoards is", moodBoards);

  return (
    <div>
      {moodBoards.map((moodBoard) => (
        <MoodBoard key={moodBoard._id} moodBoard={moodBoard} />
      ))}
    </div>
  );
};

export default MoodBoardContainer;
