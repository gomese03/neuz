// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//     q: 'trump',
//     category: 'politics',
//     language: 'en',
//     country: 'us'
//   }).then(response => {
//     console.log(response);
//     /*
//       {
//         status: "ok",
//         articles: [...]
//       }
//     */
//   });

  async function getTopHeadlines(newsapi) {
    let result = null;
    try {
      result = await newsapi.v2.topHeadlines({
        q: 'trump',
        category: 'politics',
        language: 'en',
        country: 'us'
      });
    } catch (error) {
      console.error('Error fetching sources:', error);
      result = error;
    } finally {
      return result;
    }
  }
  
  module.exports = getTopHeadlines;