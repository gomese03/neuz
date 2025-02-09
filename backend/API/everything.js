// To query /v2/everything
// You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',  //yyyy-mm-dd
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });

async function getEverything(newsapi) {
  let result = null;
  try {
    result = await newsapi.v2.everything({
      q: 'bitcoin',
      sources: 'bbc-news,the-verge',
      domains: 'bbc.co.uk, techcrunch.com',
      from: '2025-01-20',
      to: '2025-01-30',
      language: 'en',
      sortBy: 'relevancy',
      page: 1
    });
  } catch (error) {
    console.error('Error fetching sources:', error);
    result = error;
  } finally {
    return result;
  }
}

module.exports = getEverything;
