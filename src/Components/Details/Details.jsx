import React, { useEffect, useState } from 'react';
import Tabs from '../Tabs/Tabs';
import { getEvents } from '../../API/api';
import './Details.css';
import TagsContainer from '../TagsContainer/TagsContainer';
import EventCard from '../EventCard/EventCard';


export default function Details({ category }) {
    const [toggleState, setToggleState] = useState(0);
    const headings = ['Upcoming', 'Archived', 'All Time Favorites'];
    const [site_events, setEvents] = useState([]);
    const [selected_tags, setSelection] = useState([])


    useEffect(() => {
        getEvents(category, headings[toggleState], selected_tags, 0)
            .then(res => setEvents(res))
            .catch(e => console.log(e));
    }, [toggleState, selected_tags, category]);

    return (
        <div>
            {/* TODO: tabs inside this component should have less font-weight and stuff
             I can't figure out how to override
             styles of Tabs in this component, it just takes styles from the EventsTab components */}
            <Tabs
                headings={headings}
                cur_ind={toggleState}
                setIndex={setToggleState}
            />
            <div id='display-area'>
            <TagsContainer selected_tags={selected_tags} setSelection={setSelection} />
                {site_events.map((site_event, ind) => {
                    return (
                        <EventCard event={site_event} key={ind}/>
                    );
                })}
              
            </div>
            
        </div>
    )
}