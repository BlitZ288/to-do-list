import React from 'react';
import './App.css';
import HeaderToDo from './HeaderToDo'
import TodoListItem from './TodoListItem'
import TempleteModal from './ModalWindow/TempleteModalWindow'
interface IStateApp{
  isTask:boolean
  activeAdd:boolean
}
interface IPropsApp{

}
 
function OpenTasks(){

}
function OpenCategoty(){

}
class App extends React.Component<IPropsApp,IStateApp> {
  
  constructor(props:IPropsApp){
    super(props)
    this.state={
      isTask:true,
      activeAdd:false
    }
  }
  handlerSwapChoice(isTaskButton:boolean)
  {
    this.setState({isTask:isTaskButton});   
  }
  setActiveWindow(active:boolean)
  {
    this.setState({activeAdd:active});
  }


  render(): React.ReactNode
  {
    const isTask = this.state.isTask;
    const activeAdd = this.state.activeAdd;
    const swapChoice = this.handlerSwapChoice.bind(this);
    return  (
      <div className="App">
        <div className='header'>
          <HeaderToDo isTask={isTask} swapChoice={swapChoice}/>
        </div>
        <div className='todoList'>
          <TodoListItem isTask={isTask} />
        </div>

      </div>
    );
  }
  
}
/* Модалка отвечающая за добовление категорий и добовление задач  */

export default App;
