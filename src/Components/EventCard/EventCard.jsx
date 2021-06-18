import React from 'react';
import './EventCard.css';

export default function EventCard(props) {

    function getDate(registration_start_time) {
        // TODO
        return registration_start_time;
    }

    return (
        <div>
        <div className="card">
            <img className="card-img-top" src={props.event.cover_picture} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{props.event.name}</h5>
                <div className="card-info">
                
                <div className='event-info-item'>
                    <b className='item-label'> Starts on </b>
                    <p className='item-value'> {getDate(props.event.registration_start_time)} </p>
                </div>
                <div className='item-label'>
                    <b> Entry Fee </b>
                    <p className='item-value'>{props.event.fees === 0 ? 'Free' : props.event.fees} </p>
                </div>
                <p className='item-label'>
                    <b> Venue </b>
                    <p className='item-value'> {props.event.venue} </p> 
                </p>
                </div>
                <p className="card-text">{props.event.short_desc}</p>
            </div>
        </div>
        </div>
    );
}