import React, { useEffect, useState } from 'react';
import Tabs from '../Tabs/Tabs';
import { getEvents } from '../../API/api';
import './Details.css';

export default function Details({ category }) {
    const [toggleState, setToggleState] = useState(0);
    const headings = ['Upcoming', 'Archived', 'All Time Favorites'];
    const [site_events, setEvents] = useState([]);

    useEffect(() => {

    }, [toggleState, category]);

    return (
        <div>
            <Tabs
                headings={headings}
                cur_ind={toggleState}
                setIndex={setToggleState}
            />
            {site_events.map((site_event, ind) => {
                return (
                    <div>

                    </div>
                );
            })}
        </div>
    )
}