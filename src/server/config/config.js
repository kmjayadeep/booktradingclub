import dotenv from 'dotenv';
dotenv.config();

const env = process.env;

const config = {
    development: {
        dbUrl: env.DB_URL
    },
    production: {
        dbUrl: env.DB_URL
    }
};

const mode = env.NODE_ENV || 'production';

export default config[mode];