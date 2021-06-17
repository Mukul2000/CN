import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.codingninjas.com/api/v3'
});

export async function getEvents(category, sub_category, tag_list, offset) {
    const response = await API.get('/events', {
        params: {
            event_category: category,
            event_sub_category: sub_category,
            tag_list: tag_list, // Yeah this one gonna be a problem
            offset: offset,
        }
    });
    return response.data.events;
}

export async function getTags() {
    const response = await API.get('/event_tags');
    return response.data.data.tags;
}