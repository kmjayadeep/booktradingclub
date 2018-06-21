import dotenv from 'dotenv';
dotenv.config();

const env = process.env;

const config = {
    development: {
        sessionSecret: env.SESSION_SECRET || 'secretsession',
        dbUrl: env.DB_URL,
        jwtSecret: env.JWT_SECRET || 'thisisasecret',
        google:{
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }
    },
    production: {
        sessionSecret: env.SESSION_SECRET,
        dbUrl: env.DB_URL,
        jwtSecret: env.JWT_SECRET,
        google:{
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }
    }
};

const mode = env.NODE_ENV || 'production';

export default config[mode];