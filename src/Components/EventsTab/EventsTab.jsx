import './EventsTab.css';
import React, { useEffect, useState } from 'react';
import Tabs from '../Tabs/Tabs';
import Details from '../Details/Details';


export default function EventsTab() {
  const [toggleState, setToggleState] = useState(0);
  const headings = ['All Events', 'Webinars', 'Coding Events', 'Bootcamp Events', 'Workshop'];

  function getCategory(num) {
    if (num === 0) return 'ALL_EVENTS';
    else if (num === 1) return 'WEBINARS';
    else if (num === 2) return 'CODING_EVENT';
    else if (num === 3) return 'BOOTCAMP_EVENT';
    else return 'WORKSHOP';
  }

  return (
    <div id='main-wrapper'>
      <Tabs
        headings={headings}
        cur_ind={toggleState}
        setIndex={setToggleState}
      />
      <Details category={getCategory(toggleState)} />
    </div>
  );
}

