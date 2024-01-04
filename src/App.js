import Header from "./components/header/Header";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Description name={data.name} job={data.job} />
      <Footer />
    </div>
  );
}

export default App;
