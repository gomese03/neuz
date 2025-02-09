import React from 'react';
import NewsComponent from './NewsComponent';

function App2() {
  return (
    <div className="App">
      <NewsComponent api="top-headlines" />
      {/* <NewsComponent api="everything" /> */}
      {/* You can change the api prop to "sources" or "everything" as needed */}
    </div>
  );
}

export default App2;
