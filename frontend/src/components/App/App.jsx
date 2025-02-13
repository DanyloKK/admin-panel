import {useState} from 'react'
import '../../index.css'
import LoginForm from '../LoginForm/LoginForm.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from '../Main/Main.jsx';
import Products from "../Products/Products.jsx";
import MainContent from "../MainContent/MainContent.jsx";
import {Provider} from "react-redux";
import {store} from "../../../redux/store.js";
import {ModalContextProvider} from "../../context/modalContext.jsx";

function App() {

    return (
        <Provider store={store}>
            <ModalContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginForm/>}/>
                        <Route path="/main" element={<Main/>}>
                            <Route path="content" element={<MainContent/>}/>
                            <Route path="product" element={<Products/>}/>
                        </Route>
                    </Routes>
                </Router>
            </ModalContextProvider>
        </Provider>

    )
}

export default App
