import { useState } from 'react';
import {allProjectsData} from "./data/allprojects"
import Layout from "./components/Layout/Layout"

function App() {
  const [data, setData] = useState(allProjectsData.stared)

  const handleSiderbarClick = (item) => {
      // console.log('clicked')
      let curItem = item.toLowerCase();
      let curData = allProjectsData[curItem]
      // console.log('curdata', curItem, curData)
      setData(curData)
  }

  return (
    <div className='App'>
      <Layout data={data} handleSiderbarClick={handleSiderbarClick}/>
    </div>
  );
}

export default App;
