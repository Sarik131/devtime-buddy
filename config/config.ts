import dotenv from 'dotenv';

dotenv.config();

const config = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
    API_URL: process.env.API_URL || 'https://api.github.com',
    SUMMARY_OUTPUT_FORMAT: process.env.SUMMARY_OUTPUT_FORMAT || 'text',
};

export default config;