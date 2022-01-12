//import logo from './logo.svg';
import './App.css';
import AppForm from './components/appForm'
import { useGetAllApplicationsQuery } from './hooks/applicationsApi.js'
import { useEffect, useState } from 'react';


// const GetApps = () => {
//   const { data, error, isLoading } = useGetAllApplicationsQuery();
//   return data;
// }

function App() {
  // const [apps, SetApps] = useState([]);
  

  // useEffect(() => {
  //   const data = GetApps();
  //   if(data) {
  //     console.log(data);
  //   }
  // }, [apps])


  return (
    <div className="container">
      {/* {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null} */}
    </div>
  );
}

export default App;
