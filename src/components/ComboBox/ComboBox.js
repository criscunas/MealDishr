import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FoodData from "../../mealNames.json";
import React from 'react';

export default class ComboBox extends React.Component {
    
    state = {
        meal : ''
    }

    render() {
        return (
        <div className="logoHeader">
        <h1 className="logo">MealDishr</h1>
        <div className="search">
            <Autocomplete  
            className = "autocomplete"
            disablePortal 

            value= {this.state.meal}
            id='combo-box-demo'
            options={FoodData}
            sx = {{ width: 300}}
            onChange = {(event, newValue) => {
                this.setState({
                    meal : newValue
                })
        }}
            renderInput={(params) => <TextField {...params}  label="Find Meal"/>}
        />
            <button className='submitButton' onClick={() => {this.props.handler(this.state.meal)}} > Submit </button>
            
            </div>
        </div>
        )
    }

}