import axios from 'axios'

export default axios.create({
    withCredentials: true,
    credentials: 'include',
    baseURL: 'https://secondhand-6-3-staging.herokuapp.com'
})