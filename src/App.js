import React, { useState } from 'react';
import NavBar from './Components/Navbar'
import InfoPanel from './Components/infopanel'
import BottomNav from './Components/BottomNav'

function App() {

  const screenConfig = useState(0);

  return (
    <div className="App">
      <NavBar />
      <InfoPanel currentScreen={screenConfig[0]}/>
      <BottomNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
