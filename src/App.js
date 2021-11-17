import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { BrowserRouter,Routes, Route} from "react-router-dom";


const App = () => {
    const [, setHeight] = useState(0);

    const handleResize = () => {
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="Contact" element={<Contact/>} />
       
       </Routes>
        </BrowserRouter>
           
        </>
    );
};
export default App;
