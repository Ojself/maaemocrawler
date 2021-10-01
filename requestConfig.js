const maeemoId = "588db4a95a47fb9952db2391"
const amountGuests = 4
const year = 2021
const month = 11 //december

module.exports = {
    method: 'get',
    url: `https://api-gx.superbexperience.com/availability/dates?restaurant=${maeemoId}&online=true&month=${month}&year=${year}&guests=${amountGuests}`,
    headers: { 
      'Connection': 'keep-alive', 
      'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"', 
      'Accept': 'application/json, text/plain, */*', 
      'sec-ch-ua-mobile': '?0', 
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36', 
      'sec-ch-ua-platform': '"macOS"', 
      'Origin': 'https://maaemo.superbexperience.com', 
      'Sec-Fetch-Site': 'same-site', 
      'Sec-Fetch-Mode': 'cors', 
      'Sec-Fetch-Dest': 'empty', 
      'Referer': 'https://maaemo.superbexperience.com/', 
      'Accept-Language': 'nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5', 
      'Cookie': 'fs_uid=rs.fullstory.com#DAPW5#4711379155984384:4575723738013696/1664580519'
    }
  };