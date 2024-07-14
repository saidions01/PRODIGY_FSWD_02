

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashBoard";
import PostUser from "./components/postEmployee/postEmployee";
import UpdateUser from "./components/updateEmployee/updateEmployee";
import NoMatch from "./components/nomatch/noMatch";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          {" "}
        </Route>
        <Route path="/employee" element={<PostUser></PostUser>}>
          {" "}
        </Route>
        <Route path="/employee/:id" element={<UpdateUser></UpdateUser>}>
          {" "}
        </Route>
        <Route path="*" element={<NoMatch></NoMatch>}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
