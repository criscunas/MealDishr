import ComboBox from './components/ComboBox/ComboBox';
import {Component} from "react";
import './App.css';
import axios from 'axios';
import Main from './components/Main/Main'


export default class App extends Component {

  state = {
    meal : {
      name: '' ,
      instructions: '',
      thumbnail : '' ,
      link : '' ,
      ingredients : [] 
    }
  }

  getIngredients = (data) => {

    let iList = [];

    let ingredients = []
    let measures = []
    
     Object.keys(data).map((key) => data[key]).slice(9, 29).forEach((item, index) => {
      if(item) {
        ingredients.push(item)
        measures.push(Object.keys(data).map((key) => data[key]).slice(29, 49)[index])
      }
    })

    ingredients.forEach((item, i)=> {
      iList.push({name: ingredients[i], amount: measures[i]});
    })

      return iList
  }


  handler = (meal) => {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(response => {
          let mealData = response.data.meals[0]
          let ingred = this.getIngredients(mealData)
          this.setState({
            meal : {
              name : mealData.strMeal ,
              instructions : mealData.strInstructions,
              thumbnail : mealData.strMealThumb,
              link : mealData.strYoutube ,
              ingredients : ingred
            }
          })
        })
  }

  render() {
    return (
      <div className="App">
        <ComboBox handler ={this.handler} />
        {
        this.state.meal.instructions !== '' ? 
        <Main meal = {this.state.meal} />:
        <div></div>
        }

      </div>
    )
  }
}



