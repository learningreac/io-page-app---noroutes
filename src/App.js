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



// const routesElement = useRoutes(routes);


    // <Routes>
    //   <Route path='/' element={<Layout />}>
    //     <Route path="/Stared" element={<Star />} ></Route>
    //     <Route path="/Visualization" element={<Visualization />} ></Route>
    //     <Route path="/Fullstack" element={<FullstackList />} ></Route>
    //     <Route path="/Tools" element={<Tools />} ></Route>
    //   </Route>
    // </Routes>
