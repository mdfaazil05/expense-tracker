
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSampleValue } from "../redux/sampleSlice";
import { updateContextValue } from "../redux/contextSlice";
import { useAppContext } from "../context/ContextProvider";
import { fetchData } from "../api/api";

const Home = () => {
    const sampleValue = useSelector(state => state.sample.value);
    const contextReduxValue = useSelector(state => state.context.value);
    const dispatch = useDispatch();

    const { contextValue, setContextValue } = useAppContext();
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        fetchData().then(data => setApiData(data));
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>🏡 Home Component</h2>
            
            {/* Redux Sample State */}
            <p><strong>Redux Sample Value:</strong> {sampleValue}</p>
            <button onClick={() => dispatch(updateSampleValue("Updated Sample Redux!"))}>
                Update Sample Redux
            </button>

            {/* Redux Context State */}
            <p><strong>Redux Context Value:</strong> {contextReduxValue}</p>
            <button onClick={() => dispatch(updateContextValue("Updated Redux Context!"))}>
                Update Redux Context
            </button>

            {/* Context API */}
            <p><strong>Context API Value:</strong> {contextValue}</p>
            <button onClick={() => setContextValue("Updated Context API!")}>
                Update Context API
            </button>

            {/* API Data */}
            {apiData ? <p><strong>API Data:</strong> {apiData.title}</p> : <p>Loading API Data...</p>}
        </div>
    );
};

export default Home;
