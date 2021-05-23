import dotenv from 'dotenv'

dotenv.config()

export const APISettings = {
    backEndUrl: (process.env.NODE_ENV === 'production') ? 'https://trigger-email-service.azurewebsites.net/' : process.env.REACT_APP_BACKEND_URL,
    adminEmailAddress: (process.env.NODE_ENV === 'production') ? 'jayashreesrinivasan12@gmail.com' : process.env.REACT_APP_ADMIN_EMAIL_ADDRESS,
    email: {
        sendToAdmin: 'email/send/info'
    }
}