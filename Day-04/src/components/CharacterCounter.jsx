import React, {useState} from 'react'

function CharacterCounter() {
    const [text, setText] = useState('');

  return (
    <div>
        <hr />
        <textarea
            placeholder="Enter your text here"
            value={text}
            onChange={e => setText(e.target.value)}
            maxLength={100}
        />

        <p>Characters entered: {text.length}</p>
        <p>Characters remaining: {100 - text.length}</p>

    </div>
  )
};

export default CharacterCounter;
