import React, { useEffect, useState } from 'react';
import Tabs from '../Tabs/Tabs';
import { getEvents } from '../../API/api';
import './Details.css';
import TagsContainer from '../TagsContainer/TagsContainer';
import EventCard from '../EventCard/EventCard';
import { Button } from 'react-bootstrap';


export default function Details({ category }) {
    const [toggleState, setToggleState] = useState(0);
    const [site_events, setEvents] = useState([]);
    const [selected_tags, setSelection] = useState([])
    const [page, setPage] = useState(1);

    const resPerPage = 20;
    const headings = ['Upcoming', 'Archived', 'All Time Favorites'];



    useEffect(() => {
        getEvents(category, headings[toggleState], selected_tags, page * resPerPage - resPerPage)
            .then(res => setEvents(res))
            .catch(e => console.log(e));
    }, [toggleState, selected_tags, category, page]);

    return (
        <div id='detail-area'>
            {/* TODO: tabs inside this component should have less font-weight and stuff
             I can't figure out how to override
             styles of Tabs in this component, it just takes styles from the EventsTab components */}
            <Tabs
                headings={headings}
                cur_ind={toggleState}
                setIndex={setToggleState}
            />
            <div id='tags-events-wrapper'>
                <div id='events-area'>

                    {site_events.map((site_event, ind) => {
                        if (ind <= resPerPage - 1) {
                            return (
                                <EventCard event={site_event} key={ind} />
                            );
                        }
                        else return <div></div>
                    })}
                </div>

                {/* Also can't figure out how to put this Tags component next to 
                    the event details  */}
                <div id='tags-area'>
                    <TagsContainer selected_tags={selected_tags} setSelection={setSelection} />
                </div>
            </div>
            <div id='paginator'>
                {page > 1 && <Button variant='primary' onClick={(e) => setPage(page - 1)}> Previous </Button>}
                <div id='page'> {page} </div>

                {site_events.length > 0 && <Button variant='primary' onClick={(e) => setPage(page + 1)}> Next </Button>}
            </div>
        </div>
    )
}