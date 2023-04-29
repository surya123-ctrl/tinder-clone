import React from 'react'
import "./App.css"
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
const App = () => {
  return (
    <div className='app'>

      {/* Header */}
      <Header />




      {/* TinderCards */}
      <TinderCards />





      {/* SwipeButtons */}
      <SwipeButtons />

    </div>
  )
}

export default App;


// After this we will create Node.js Application and create server which we connect to mongoDB and grab all data that is hardcoded on your screen to MongoDb then we will pull it out