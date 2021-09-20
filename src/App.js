import logo from './logo.svg';
import './App.css';

function App() {
  const cinemas =[
    {nayok :'kuber', nayika: 'kopila'},
    {nayok :'Laxman', nayika: 'Antora'},
    {nayok :'Sujon', nayika: 'Toma'},
    {nayok :'Jasim', nayika: 'suchorita'},
    {nayok :'Chayan', nayika: 'Suborna'}
  ]
  return (
    <div className="App">
      {
        cinemas.map(cinema =><Cinema nayok={cinema.nayok} nayika ={cinema.nayika}></Cinema>)
      }
      {/* <Person name="Shakib al hasan" profession ="Criket"></Person>
      <Person name="Sujon" profession ="Football"></Person>
      <Person name="Laxman" profession ="Teacher"></Person>
      <Friend name="Suborna Sarker" Address ="Natore"></Friend>
      <Friend name="Joye Roy" Address="Mohendronagar"></Friend>
      <Friend name="Borsha Ray" Address="Pabna"></Friend> */}
    </div>
  );
}

function Person(props) {
  const person ={
    backgroundColor : 'pink',
    color: 'white',
    margin: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={person}>
      <h1>Name : {props.name}</h1>
      <h4>Profession :{props.profession}</h4>
    </div>
  );
}
function Cinema (props){
  return(
    <div className ="person">
      <h2>Nayok : {props.nayok}</h2>
      <h4>Nayok : {props.nayika}</h4>
    </div>
  )
}

function Friend (props ){
  const friendStyle = {
    backgroundColor: 'orange',
    color: 'balck',
    fontSize : '20px',
    margin : '20px'
  }
  return(
    <div style ={friendStyle}>
      <h2>Name: {props.name}</h2>
      <p>Address:{props.Address}</p>
    </div>
  );
};

export default App;
