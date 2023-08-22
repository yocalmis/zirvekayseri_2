import { useRoutes } from "react-router-dom";
import Routesx from "./Routes/Routesx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const element = useRoutes(Routesx);
  console.log("app render");

  return <>{element}</>;
}

export default App;
