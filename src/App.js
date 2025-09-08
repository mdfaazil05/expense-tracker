
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ContextProvider } from "./context/ContextProvider";
import Home from "./containers/Home";
import LoadingDashboard from "./containers/Landing";
import AppNavbar from "./components/AppNavbar";
   
   const App = () => {
    return (
        <Provider store={store}>
            <ContextProvider>
                <div style={{ textAlign: "center", margin:"-7px" }}>
                    <AppNavbar/>
                    {/* <h1>Expense Tracker</h1> */}
                </div>
            </ContextProvider>
        </Provider>
    );
};

export default App;