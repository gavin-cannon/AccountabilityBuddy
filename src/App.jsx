import './App.css';
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CompleteButton from "./components/CompleteButton.jsx";

function App() {
    return (
        <>
            <Header />
            <main>
                <h2>Accountabilibuddy</h2>
                <CompleteButton/>
            </main>
            <Footer />
        </>
    );
}

export default App
