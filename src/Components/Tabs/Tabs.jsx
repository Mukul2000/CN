import React from 'react';
import './Tabs.css';

export default function Tabs({ headings, cur_ind, setIndex }) {

    return (
        <div className="container">
            <div id="bloc-tabs">
                {headings.map((heading, ind) => {
                    return <button
                        key = {ind}
                        className = {ind === cur_ind ? "tabs active-tabs" : "tabs"}
                        onClick={() => setIndex(ind)}
                    >
                        {heading}
                    </button>
                })}
            </div>
        </div>
    );
}

