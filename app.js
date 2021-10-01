require('dotenv').config()
const axios = require('axios');
const { CronJob } = require('cron');
const Prowl = require('node-prowl');
const prowl = new Prowl(process.env.PROWLAPIKEY);
const timeZone = 'Europe/Oslo';
const config = require("./requestConfig")


const getAvailableDates = async () => {
    try {
        const response = await axios(config)
        return response.data
    }   catch (error) {
        console.log("Failed to fetch Maeemo calendar ", error);
    }
}

const crawlService = async () => {
    const { data } = await getAvailableDates()
    if (data.some(date => date.available)) {
        const availableDates = data.filter(d=>d.available).map((d,i)=> (i !==0 ? " " : "") + d.date)
        prowl.push(`There's available dates at Maeemo - December:\n ${availableDates}`, 'Maeemo crawler', ( err )=>{
            if ( err ) throw err;
        });
    }
}

//Runs every 30 seconds
const cronJob = new CronJob('*/30 * * * * *', (() => {
    crawlService()
  }), null, true, timeZone);

cronJob.start();
