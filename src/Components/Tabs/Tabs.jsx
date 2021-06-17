import React from 'react';

export default function Tabs({ headings, cur_ind, setIndex }) {

    return (
        <div className="container">
            <div className="bloc-tabs">
                {headings.map((heading, ind) => {
                    return <button
                        key = {ind}
                        className={ind === cur_ind ? "tabs active-tabs" : "tabs"}
                        onClick={() => setIndex(ind)}
                    >
                        {heading}
                    </button>
                })}
            </div>
        </div>
    );
}

