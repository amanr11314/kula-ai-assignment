import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DemoContent from "./components/DemoContent";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <DemoContent data={data} />
    </div>
  );
}

export default App;
