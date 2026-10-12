import React, {useState} from 'react'

function Accordion() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <h2
            onClick={() => setIsOpen(!isOpen)}
            style={{cursor: 'pointer'}}
        >
            {isOpen ? '▼' : '▶'} What is React?
        </h2> 

        {isOpen && 
            <p>React is a JavaScript library used for building user interfaces.</p>
        }
    </div>
  );
};

export default Accordion;
