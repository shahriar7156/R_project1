import React, {useState} from 'react';
import style from "./NewTodo.module.css"



const NewTodo = (props) => {

  const [todo,setTodo] = useState ({title:"", desc:""})

  const{title,desc}=todo;
  //distraching , kaje lagche value te shudhu title, desc use korchi dekho
const handleChange=(event)=>
{
  const name= event.target.name;
  setTodo((oldTodo) =>
  {
    return {...oldTodo,[name]:event.target.value}
  })
}

const handleSubmit =(event)=>
{
  event.preventDefault ();
  props.onAddTodo(todo);
  setTodo({title:"",desc:""})

};

  return <form className={style.form} onSubmit={handleSubmit}>
  <div className={style["form_field"]}>
   <label htmlFor="title">Title: </label>
   <input type= "text" id ="title" name="title"
   value={todo.title} onChange={handleChange}/>
   </div>

   <div className={style["form_field"]}>
   <label htmlFor="desc">desc: </label>
   <textarea type= "text" id ="desc" name="desc"  value={todo.desc} onChange={handleChange}/>
  
   </div>

   <button type="submit">Add todo</button>
  </form>
}

export default NewTodo