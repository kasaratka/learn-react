import React from 'react';
import {useState} from 'react';
function Comp()
{
    const[count, setCount] = useState(0);
    const[comment, setComment] = useState([]);

    let myRef = React.createRef();

    let handler = () => {
        let currentCount = count;
        currentCount++;
        setCount(currentCount);
    }

    let addComment = () => {
        let commentValue = myRef.current.value;
        let comments = [...comment, commentValue];
        setComment(comments);
        myRef.current.value='';
    }
    
    return(
        <>
        <h1>Hi</h1>
        
        <div>
            <input ref={myRef}></input>
        </div>
        <div>
            <button onClick={addComment}>Submit</button>
        </div>
        <div>
            <ul>
                {comment.map((item,index) => <li key={index.toString()}>{item}</li>)}
            </ul>
        </div>
        </>
    );
    
}

export default Comp; 