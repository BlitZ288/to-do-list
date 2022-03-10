import React from 'react';
import './css/listItem.css'
import MyContextDb from './indexDb/ContextDb'
import Task from './Model/Task';
import ItemTask from './Components/ItemTask'
import ItemCategory from './Components/ItemCategory'
import Category from './Model/Category';

interface ITodoListItemProps{
    isTask:boolean
}
interface ITodoListItemState{
    error?:Error 
    isLoaded:boolean
    itemsTask?: Array<Task>
    itemsCategory?: Array<Category>
}


class TodoListItem extends React.Component<ITodoListItemProps,ITodoListItemState>{
    
    constructor(props:ITodoListItemProps){
        super(props);
        this.state ={
             error:undefined,
             isLoaded:false,
             itemsTask:[],
             itemsCategory:[]
        }
    }
    
    renderTasks(idTask:number,nameTask:string, description:string, categoriRef?:number ){
       return <ItemTask id={idTask} name={nameTask} categoryId={categoriRef} description={description} />
    }
    renderCategores(idCategory:number,nameCategory:string, description:string){
        return <ItemCategory id={idCategory} name={nameCategory} description={description} />
     }

    componentDidMount(){
        let context = new MyContextDb();      

            context.GetAllTasks().then(
                (result)=> 
                {            
                this.setState({isLoaded:true, itemsTask: result })            
                },
                (error)=>{
                this.setState({isLoaded:true, error: error }) 
                }
            );
    
            context.GetAllCategores().then(
                (result)=> 
                {            
                this.setState({isLoaded:true, itemsCategory: result })            
                },
                (error)=>{
                this.setState({isLoaded:true, error: error }) 
                }
            );
     
       
    }

    render(): React.ReactNode {
        const tasks = this.state.itemsTask;
        const categores = this.state.itemsCategory;
        const isLoaded = this.state.isLoaded;   
        const erorr = this.state.error; 
        if(!isLoaded){
            return <p>Loading....</p>
        }if(erorr !== undefined){
            return <p>Error {erorr.message}</p>
        }
        if(this.props.isTask)
        {
            return(              
                tasks?.map(task=>{
                    return this.renderTasks(task.id,task.name,task.description, task.categoryId);                      
                    })      
            )
        }        
         if(!this.props.isTask){
            return(
                categores?.map(category=>{
                    return this.renderCategores(category.id,category.name,category.description);                      
                    })   
            )
        }
       
    }
}
/*

1.Будет управлять модальными окнами( удаление / редактирование )
2.

*/

export default TodoListItem;
