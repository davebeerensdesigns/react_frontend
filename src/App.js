import './App.css';
import ListEmployeeComponent from "./components/list-employee.component";
import HeaderComponent from "./components/header.component";
import FooterComponent from "./components/footer.component";

function App() {
    return (
        <div>
            <HeaderComponent/>
            <ListEmployeeComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
