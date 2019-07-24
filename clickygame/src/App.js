import React from 'react';
import Cards from "./components/Cards/cards";
import cardcontent from "./cardcontent.json"




class App extends React.Component {
  state = {
    cardcontent,
    deleted: false
  }
  render() {
    return (
      <div>
       
        {this.state.cardcontent.map((element)=> {return<Cards image={element.image} id={element.id} name={element.name}  location={element.location}/>})}
      </div>
    );
  }

}

export default App;
