//import { json } from "express";
import TodoModel from "../models/todoModel.js";
var TODO = new TodoModel();

class TodoController {
  constructor() {}
  //services

/* index(request, response) {
   response.status(200).json({ msn: "HOLA MUNDO DESDE REST" });
   }
*/
 async agregateTodo(request, response) {
    var data = request.body;
    
    var result = await TODO.agregateTodo(
        data.name, 
        data.description, 
        new Date(), 
        data.hour
    );
    response.status(200).json(result);
  }
  
  async getTodos(request, response){
      var result = await TODO.getTodos();
      response.status(200).json(result);
  }
  
  async updateTodo(request, response){
      var id = request.params.id;
      var updatedata = request.body;
      var result = await TODO.updateModel(id, updatedata);
      response.status(200).json({ result });
  }
  
  async deleteTodo(request, response) {
      var id = request.params.id;
      var result = await TODO.deleteTodo(id);
      response.status(200).json({ result });
  }
}
export default TodoController;