import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListEmployeeComponent from "./components/list-employee.component";
import HeaderComponent from "./components/header.component";
import FooterComponent from "./components/footer.component";

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<ListEmployeeComponent />}/>
                        <Route path="/employees" element={<ListEmployeeComponent />}/>
                    </Routes>
                </div>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
