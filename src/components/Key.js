import React from 'react';
import _ from 'lodash';

import './Key.css';
import { NOTE_TO_KEY } from '../global/constants';

function Key(props) {
  const noteIsFlat = (note) => {
    return note.length > 1;
  };

  const keyIsPressed = (note, pressedKeys) => {
    return _.includes(pressedKeys, NOTE_TO_KEY[note]);
  };

  let keyClassName = "key";
  const noteIsFlatValue = noteIsFlat(props.note);
  const keyIsPressedValue = keyIsPressed(props.note, props.pressedKeys);
  if (noteIsFlatValue) {
    keyClassName += " flat";
  }
  if (keyIsPressedValue) {
    keyClassName += " pressed";
  }

  let key;
  if (noteIsFlatValue) {
    key = <div className={keyClassName}></div>;
  } else {
    key = (
      <div className={keyClassName}>
        <div className="key-text">{props.note.toUpperCase()}</div>
      </div>
    );
  }
  return key;
}

export { Key };
