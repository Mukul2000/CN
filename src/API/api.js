import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.codingninjas.com/api/v3'
});

export async function getEvents(category, sub_category, tag_list, offset) {
    // Convert tag list to comma seperated values
    let tags = "";
    for(let i = 0; i < tag_list.length; i++) {
        tags = tags + tag_list[i];
        tags += ",";
    }
    tags = tags.substring(0, tags.length - 1);
    const response = await API.get('/events', {
        params: {
            event_category: category,
            event_sub_category: sub_category,
            tag_list: tags, // Yeah this one gonna be a problem
            offset: offset,
        }
    });
    return response.data.data.events;
}

export async function getTags() {
    const response = await API.get('/event_tags');
    return response.data.data.tags;
}