// To query sources
// All options are optional
// newsapi.v2.sources({
//     category: 'technology',
//     language: 'en',
//     country: 'us'
//   }).then(response => {
//     console.log(response);
//     /*
//       {
//         status: "ok",
//         sources: [...]
//       }
//     */
//   });

async function getSources(newsapi) {
  let result = null;
  try {
    result = await newsapi.v2.sources({
      category: 'technology',
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

module.exports = getSources;