import axios from 'axios';
import Task from '../Model/Task'
import Category from '../Model/Category'

class ContextDb {

   async GetAllTasks():Promise<Task[]> 
    { 
        return (await axios.get<Task[]>("http://localhost:8089/api/ToDoList/GetTasks")).data;     
    }
    async RemoveTask(taskId:number)
    {
        await axios.get(`http://localhost:8089/api/ToDoList/RemoveTask/${taskId}`);     

    }
    async AddTask(task:Task)
    {
        await axios.post(`http://localhost:8089/api/ToDoList/AddTask`,{task});
    }
    async UpdateTask(task:Task)
    {
        await axios.post(`http://localhost:8089/api/ToDoList/UpdateTask`,{task});
    }
    async GetAllCategores():Promise<Category[]>
    {
        return (await axios.get<Category[]>("http://localhost:8089/api/ToDoList/GetCategories")).data;   
    }
    async RemoveCategor(categoryId:number)
    {
        await axios.get(`http://localhost:8089/api/ToDoList/RemoveCategory/${categoryId}`); 
    }
    async AddCategory(category:Category)
    {
        await axios.post(`http://localhost:8089/api/ToDoList/AddCategory`,{category});  
    }
    async UpdateCategory(category:Category)
    {
        await axios.post(`http://localhost:8089/api/ToDoList/UpdateCategory`,{category});
    }
  
}





export default ContextDb;
