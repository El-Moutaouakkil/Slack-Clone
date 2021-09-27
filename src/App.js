import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
function App() {
    return (
        <div className='app'>
            <Router>
                <>
                    <Header />
                    <AppBody>
                        <Sidebar />
                        <Switch>
                            <Route path='/' exact>
                                {/* Chat Component */}
                            </Route>
                        </Switch>
                    </AppBody>
                </>
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    height: 100vh;
    display: flex;
`;
