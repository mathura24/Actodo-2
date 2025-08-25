import { useLocation } from "react-router-dom";
import Card from "../components/card"; 
import Header from "../components/header";
import TodoContainer from "../components/todo-container";
function Landing() {
  const location = useLocation();
  const user = location?.state?.user || "Guest";

  return (
    <>
    <div className="container">

      <Header />
      <div className="process">
        <Card/>
        
        <TodoContainer />
      </div>

    </div>
  </>
    
  );
}

export default Landing;