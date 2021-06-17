import React, { useEffect, useState } from 'react';
import { getTags } from '../../API/api';
import './TagsContainer.css';

export default function TagsContainer({ selected_tags, setSelection }) {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTags()
            .then((res) => setTags(res))
            .catch(e => console.log(e));
    }, []);

    function handleClick(e) {
        // add this tag to selected tags, if not already exists
        let flag = 0;
        for(let i = 0; i < selected_tags.length; i++) {
            
            if(selected_tags[i] === e.target.innerText) {
                flag = 1;
                break;
            }
        }
        if(!flag) {
            // selecting new tag, add to selection
            setSelection([...selected_tags, e.target.innerText]);
            // change background to orange
            e.target.style.backgroundColor = '#fa7327';
        }
        else {
            // clicking already selected tag, revert to original background
            // and remove from selection
            const newSelection = selected_tags.filter(item => item !== e.target.innerText);
            setSelection(newSelection);
            // set background color to normal
            e.target.style.backgroundColor = '#eeeeee';
        }
        
    }

    return (
        <div id='tags-container'>
            <h3 id='tags-heading'> TAGS </h3>
            <div id='tags-wrapper'>
                {tags.map((val, ind) => {
                    return <div id='tag' key={ind} onClick={handleClick}>
                        {val}
                    </div>
                })}
            </div>
        </div>
    );
}