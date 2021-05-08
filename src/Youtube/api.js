import Axios from 'axios';

const KEY = 'AIzaSyAjWoXumTi9OsBBeVtgktonTXFObwDg4VI';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: KEY,
        maxResults: 25
    }
})