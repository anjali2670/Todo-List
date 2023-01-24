import React, {useState} from 'react'
import './App.css';
import TodoList from './TodoList';
const App = () => {
  const [inputList , setInputList]=useState("");
  const[items,setItems] = useState([])
   
  const itemEvent= (event) => {
    setInputList(event.target.value);
  };
const listOfIteams = () => {
setItems((oldItems) =>{
  return [...oldItems,inputList]
});
setInputList('')
};

const deleteItems = (id) => {
  console.log("deleted")


setItems((oldItems)=>{
return oldItems.filter((arrElem , index) => {
return index !== id;
})
});
}

  return(
    <>
    <div className='Main-div'>
<div className='center-div'>
<br/>
<h1>Todo List</h1>
<br/>
<input type="text" placeholder='Add a Items' onChange={itemEvent}/>
<button onClick={listOfIteams}> +</button>
<ol>
{items.map( (itemval ,index) => {
 return <TodoList key={index}
  id={index} 
  text={itemval} 
  onselect={deleteItems}
  />
})}
</ol>
</div></div>
    </>
  );
}

export default App;
