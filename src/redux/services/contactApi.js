
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContactsAPI() {
    const { data } = await axios.get(`/contacts`);
    return data;
}

export async function addContactAPI(item) {
    const { data } = await axios.post(`/contacts`, item);
    return data;
}
export async function deleteContactsAPI(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}





