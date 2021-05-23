import dotenv from 'dotenv'

dotenv.config()

export const APISettings = {
    backEndUrl: process.env.APPSETTING_REACT_APP_BACKEND_URL, 
    email: {
        sendToAdmin: 'email/send/info'
    }
}