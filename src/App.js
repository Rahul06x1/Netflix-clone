import React from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { orginals,action,comedy,horror,romanace,documentaries } from "./urls";


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost title='Netfilx Orginals' url={orginals} />
      <RowPost title='Action' isSmall url={action} />
      <RowPost title='Comedy' isSmall url={comedy} />
      <RowPost title='Horror' isSmall url={horror} />
      <RowPost title='Romance' isSmall url={romanace} />
      <RowPost title='Documentaries' isSmall url={documentaries} />
    </div>
  );
}

export default App;
