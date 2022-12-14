import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navegacion from "../components/Navegacion"
import Home from "../components/Home"
import Bebidas from "../components/Bebidas"
import Nosotros from "../components/Nosotros"
import Gift from "../components/Gift"
import Contacto from "../components/Contacto"
import Carro from "../components/Carro"
import Login from "../components/Login"
import Error404 from "../components/Error404"






const Rutas = () => {


    return (
        <Router>
            <Navegacion style={{
        textAlign:"center"}}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/bebidas" element={<Bebidas/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/gift" element={<Gift/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path="/carro" element={<Carro/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    )
}



export default Rutas