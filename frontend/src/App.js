import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'pages/page';
import Index from 'pages/Index';
import About from 'pages/About';
import ScannerPage from 'pages/ScannerPage'; // <--- 1. IMPORTANTE: Importar la página
import SimuladorRoutes from 'pages/simulador/page';
import Register from 'pages/Register';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Index/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/escanear" element={<ScannerPage/>} /> {/* <--- 2. IMPORTANTE: Definir la ruta */}
                    
                    {SimuladorRoutes()}
                    
                    <Route path="/crear-cuenta" element={<Register/>} />
                    <Route path="/iniciar-sesion" element={<Login/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;