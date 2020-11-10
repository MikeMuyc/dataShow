import axios from './app'

//达人库
export function getDarenku() {
    return axios.get('/api/community/guashan/edu/talent');
}

