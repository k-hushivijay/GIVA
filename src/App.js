import { BrowserRouter , Routes ,Route,  } from "react-router-dom";
import Router from "./View/Router/Router";
import './View/Style/Style.css';
export default function App(){
  return(<>
    
    <BrowserRouter>
    <Routes>
      <Route path="*" Component={Router}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}