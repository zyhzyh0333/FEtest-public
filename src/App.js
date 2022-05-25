import React, {Component} from "react";
import Select from 'react-select';
import { components } from "react-select";
import {useState} from "react";
import Navbar from "./components/navbar";
import './App.css';
import Counters from "./components/counters";
import Genres from "./components/genres";
import Data from "./mock-data.json"


// ☆⌒★


class App extends React.Component{

  state = {
    curData: Data,
    inputStr: "",
    selectedGenreOption: [],
  }

  /**
   * Combine the constraints of "inputStr", "selected Genre", "selected Ratings"
   * return a new "curData"
   * @param str
   * @param genreArr
   * @param ratingArr
   */
  updateCurData = (str, genreObjArr, ratingArr) => {
    let tmpData = Data
    // filter by inputStr
    // TODO: deleting all the input will show all the selections
    tmpData = Data.filter(post => {
      if (str === '') {
        return post;
      } else
        if (post.Title.toLowerCase().includes(str.toLowerCase())) {
        return post;
      }
    });

    // filter by genre selected
    let genreArr = []
    for (var i = 0; i < genreObjArr.length; i++) {
      genreArr.push(genreObjArr[i].value);
    }

    tmpData = tmpData.filter(post => {
      if (genreArr.length === 0) {
        return post;
      } else if (genreArr.includes("Any Genre")) {
        return post;
      } else if (genreArr.includes(post.Category)) {
        return post;
      }
    })
    // TODO

    return tmpData;
  }

  /**
   * According to input, change the Query of objects outputs of searching window
   *
   * @param str input string
   */
  setQueryFromInput = (str) => {

    const tmpData = this.updateCurData(str, this.state.selectedGenreOption, [])

    this.setState({curData: tmpData, inputStr: str})
  }

  setQueryFromGenre = (selectedOpts) => {

    const tmpData = this.updateCurData(this.state.inputStr, selectedOpts, [])

    this.setState({curData: tmpData, selectedGenreOption: selectedOpts})
  }

  /**
   * update input from searching window
   * @param str input str
   */
  handleInput = (str) => {
    this.setQueryFromInput(str)
  }

  /**
   * update Genre change
   * @param selected selected Genre
   */
  handleGenreChange = (selected) => {
    this.setQueryFromGenre(selected)
  };


  render() {

    // console.log(typeof Data[0].Category)

    return (
      <React.Fragment>
        <div>
          <input id="searchWindow" placeholder="Enter Post Title"
                 onChange={event => this.setQueryFromInput(event.target.value)}/>
          {
            this.state.curData.map((post) => (
              <div className="box" key={post.id}>
                <p>{post.Title}</p>
                <p>{post.Rating}</p>
              </div>
            ))
          }

          {
            <Genres
              onChange={this.handleGenreChange} />
          }

          {/*<Select*/}
          {/*  options={genreOptions}*/}
          {/*  isMulti*/}
          {/*  placeholder={"Genre"}*/}
          {/*  closeMenuOnSelect={false}*/}
          {/*  controlShouldRenderValue={false}*/}
          {/*  hideSelectedOptions={false}*/}
          {/*  components={{Option}}*/}
          {/*  onChange={this.handleGenreChange}*/}
          {/*  allowSelectAll={true}*/}
          {/*  value={this.state.selectedGenreOption}*/}
          {/*/>*/}
        </div>


      </React.Fragment>
        );
  }
}
export default App;

// export default function App (){
//   const [query, setQuery] = useState("")
//   return (
//   <div>
//     <input id="searchWindow" placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
//     {
//       Data.filter(post => {
//         if (query === '') {
//           return post;
//         } else if (post.email.toLowerCase().includes(query.toLowerCase())) {
//           return post;
//         }
//       }).
//       map((post, index) => {
//         return(
//         <div className="box" key={index}>
//           <p>{post.email}</p>
//           <p>{post.gender}</p>
//         </div>
//       )})
//     }
//   </div>
//   )
// }

