# Maaemocrawler

## Motivation
The reservations at this restaurant seemed to be taken the same day as they are released, which is once a month or so.
Although not an avid fancy restaurant goer, I wanted to automate the process of getting a table (or at least be notified if it exists)

## Tech
- Cron
- Prowl
- Axios

## Run project locally

- `$ git clone https://github.com/Ojself/maaemocrawler.git`
- `$ cd maaemocrawler`
- `$ npm install`
- `$ touch .env`
- Add PROWLAPIKEY=MY-API-KEY to .env - The api key can be retrieved at [Prowlapp.com](https://prowlapp.com/)
- Install Prowl on your device
- `$ node app.js`

### Screenshot
<img height="750" src="./screenshot.PNG">
