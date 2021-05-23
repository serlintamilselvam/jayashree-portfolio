import axios from 'axios'

import { APISettings } from '../api'

const BACKEND_URL = APISettings.backEndUrl

class EmailService {

    sendAdmin(data) {
        return axios.post(BACKEND_URL+APISettings.email.sendToAdmin, data)
    }

}

export default EmailService