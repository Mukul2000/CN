import './EventsTab.css';
import React, { useEffect, useState } from 'react';
import Tabs from '../Tabs/Tabs';
import Details from '../Details/Details';

import TagsContainer from '../TagsContainer/TagsContainer';

export default function EventsTab() {
  const [toggleState, setToggleState] = useState(0);
  const headings = ['All Events', 'Webinars', 'Coding Events', 'Bootcamp Events', 'Workshop'];
  const [selected_tags, setSelection] = useState([])



  function getCategory(num) {
    if (num === 0) return 'ALL_EVENTS';
    else if (num === 1) return 'WEBINARS';
    else if (num === 2) return 'CODING_EVENT';
    else if (num === 3) return 'BOOTCAMP_EVENT';
    else return 'WORKSHOP';
  }

  return (
    <div>
      <Tabs
        headings={headings}
        cur_ind={toggleState}
        setIndex={setToggleState}
      />
      <div id = 'display-area'>
        Details tab comes here
      {/* <Details category={getCategory(toggleState)} /> */}
      <TagsContainer selected_tags = {selected_tags} setSelection={setSelection}/>
      </div>
    </div>
  );
}

