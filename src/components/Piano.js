import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { Key } from './Key.js';
import {
  NOTES,
  VALID_KEYS,
  KEY_TO_NOTE,
} from '../global/constants';

function Piano() {
  const [pressedKeys, setPressedKeys] = useState([]);

  const playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  };

  const handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    if (!pressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      setPressedKeys((prevPressedKeys) => [...prevPressedKeys, key]);
    }
    playNote(KEY_TO_NOTE[key]);
  };

  const handleKeyUp = (event) => {
    setPressedKeys((prevPressedKeys) => prevPressedKeys.filter((key) => key !== event.key));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const keys = _.map(NOTES, (note, index) => (
    <Key key={index} note={note} pressedKeys={pressedKeys} />
  ));

  const audioFiles = _.map(NOTES, (note, index) => (
    <audio id={note} key={index} src={`../../notes/${note}.mp3`} />
  ));

  useEffect(() => {
    console.log(audioFiles)
  }, [audioFiles])
  return (
    <div className="App">
      <div className="App-header" >
        <div>
          <div className=" flex flex-row">{keys}</div>
          <div>{audioFiles}</div>
          <div className=' flex items-center bg-[#282c34] my-5  border-2 rounded-md p-2 text-base justify-between  '>
            <input placeholder='play...' className=' bg-[#282c34] flex-1 focus:outline-none' />
            <button>Submit</button>
          </div>
        </div>
      </div >
    </div >
  );
}

export { Piano };
