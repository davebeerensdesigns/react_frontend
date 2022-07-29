import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListEmployeeComponent from "./components/list-employee.component";
import HeaderComponent from "./components/header.component";
import FooterComponent from "./components/footer.component";
import AddEmployeeComponent from "./components/add-employee.component";

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderComponent/>
                <div className="container">
                    <Routes>
                        <Route path="/" exact element={<ListEmployeeComponent />}/>
                        <Route path="/employees" element={<ListEmployeeComponent />}/>
                        <Route path="/add-employee" element={<AddEmployeeComponent />}/>
                    </Routes>
                </div>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
