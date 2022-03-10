import './css/header.css';
import React from 'react';
import TempleteModal from './ModalWindow/TempleteModalWindow';
import CreatTaskWindow from './ModalWindow/CreatTaskWindow';

interface IHeaderStateToDo{
    activeAdd:boolean
}
interface IHeaderPropsToDo{
    swapChoice : (isTaskButton:boolean) => void
    isTask:boolean
}
class HeaderToDo extends React.Component<IHeaderPropsToDo,IHeaderStateToDo>{
    
    setActiveWindow(active:boolean)
    {
      this.setState({activeAdd:active});
    }
    constructor(props:IHeaderPropsToDo){
        super(props);
        this.state={
            activeAdd:false
        }
    }
  
   render(): React.ReactNode {
    const activeAdd = this.state.activeAdd;
    return (
        <div className="containerHeader">
         <div className='leftNavcontainer'>
            <label className="logoName">ToDo List</label>
            <nav className="continerButtonHeader">
                <a href='#' className={this.props.isTask ? "buttonNavActive" : "buttonNav"} onClick={() =>this.props.swapChoice(true)}>Задачи</a>
                <span className="separator">|</span>
                <a href='#' className={!this.props.isTask ? "buttonNavActive" : "buttonNav"} onClick={() =>this.props.swapChoice(false)}>Категории</a>
            </nav>
         </div>
            <a href='#' className="buttonNav addTask" onClick={()=>this.setActiveWindow(true)}>{this.props.isTask ? "Добавить задачу" : "Добавить категорию"}</a>

            
            <TempleteModal active={activeAdd} setActive={this.setActiveWindow} content = { CreatTaskWindow()}> 
            

            </TempleteModal>

        </div>
    );
   }
}
/* Будет состояние или свойства которые меняеться за счет нажание кнопки 
   Есть состояние которое по клику меняет название кнопки и подсветку 

*/

export default HeaderToDo;
