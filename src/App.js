import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component.jsx'
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }

  
  }

  componentDidMount(){
    //fetch is making API request to that URL and returns to me is a promise
    // that promise gives us a reponse of the actual body of our response
    //
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users}));
    
  } 

  //normalde arrow fonktion kullanmasaydın this. kelimesini kullanamazdık
  //çünkü fonksiyon class componente bind olmamıştı ayrıca bind etmek gerekirdi
  // ama arrow funk. direk olarak yeni fonksiyonu nerdeyse (burda class componentin) içinde 
  // oraya bind ediyoes
  handleChange = (e) => { 
    this.setState({searchField : e.target.value});
  } 

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
        {/* {console.log("this is monsters",this.state.monsters)} */}
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monsters'
          handleChange= {this.handleChange}
          />
        <CardList monsters={filteredMonsters} ></CardList> 
      </div>
    );
  }
}

export default App;
