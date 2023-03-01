import "./App.css";
import Homepage from "./components/pages/Homepage";
import Webcomponent from "./components/pages/Webcomponent";
import { Route, Routes } from "react-router-dom";
import UserService from "./components/UserService";
import { useEffect } from "react";

function App() {
  let kcJson = {
    clientId: "forms-flow-web",
    realm: "forms-flow-mahagony",
    url: "https://iam.aot-technologies.com/auth",
  };
  useEffect(() => {
    UserService.initKeycloak(kcJson, (data) => {
      if (data) {
        console.log(data);
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Webcomponent" element={<Webcomponent />} />
      </Routes>
    </div>
  );
}

export default App;
