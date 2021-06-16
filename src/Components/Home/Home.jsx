import React from 'react';
import EventsTab from '../EventsTab/EventsTab';
import './Home.css';

export default function Home() {
    return (
        <div>
            <div id='outer-events-wrapper'>
                <div id='header'>
                    <div id='header-text'> Events & News </div>
                    <div id='header-subtitle'> Learn, Compete & Grow
 </div>
                </div>
            </div>
            <div id='events-wrapper'>
                <EventsTab/>
        </div>
        </div>
    );
}