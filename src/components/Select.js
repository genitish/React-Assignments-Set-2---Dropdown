import React, {useState, useEffect} from "react";
import  "./Select.css";

const Selector = (props) =>{
    let count = 0;
    const [states , setStates] = useState("0");
    const [cities, setCities] = useState("0");
    const [landmarks, setLandMarks] = useState("0");

    return(
        <div className = "selector">
            <div className = "state">
                <div>
                    <label>State: </label>
                    <select id ="state" onChange={e => setStates(e.target.value)}>
                        {props.statesList.map((state,id) =>(
                            <option value={id} >{state.name}</option>
                        ))}
                    </select>
                </div>
    
                <div id = "state-name">
                    <div id="state-title">{props.statesList[states].name}</div>
                    <div id = "state-description">{props.statesList[states].description}</div>
                </div>
            </div>
        
            <div className = "city">
                <div>
                    <label>City:</label>
                    <select id="city" onChange={e => setCities(e.target.value)}>
                        {props.statesList[states].city.map((cities,id) =>(
                            <option value={id} >{cities.name}</option>
                        ))}
                    </select>
                </div>
                
                <div id = "city-name">
                    <div id = "city-title">{props.statesList[states].city[cities].name}</div>
                    <div id = "city-description">{props.statesList[states].city[cities].description}</div>
                </div>
            </div>
            
            <div className = "landmark">
                <div>
                    <label>Landmark: </label>
                    <select id="landmark" onChange={e => setLandMarks(e.target.value)}>
                        {props.statesList[states].city[cities].landmarks.map((land,id) =>(
                            <option value={id} >{land.name}</option>
                        ))}
                    </select>
                </div>
                
                <div id = "landmark-name">
                    <div id = "landmark-title">{props.statesList[states].city[cities].landmarks[landmarks].name}</div>
                    <div id = "landmark-description">{props.statesList[states].city[cities].landmarks[landmarks].description}</div>
                </div>
            </div>
        </div>       
    )
};

export default Selector;