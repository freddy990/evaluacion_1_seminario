import mongoose from "../connection/connect.js";
import modelenum from "../utils/enumModel.js";
class TodoModel {
  constructor() {
    var Schema = mongoose.Schema;
    this.TodoSchema = new Schema({
      name: String,
      description: String,
      date: Date,
      hour: String,
      done: {
          done: Boolean,

      },
      
    });
    
    if (modelenum["todos"] == null) {
        this.mymodel = mongoose.model("todos", this.TodoSchema);
        modelenum["todos"] = this.mymodel;
      } else {
        this.mymodel = modelenum["todos"];
      }  
    }

  getModel() {
    return this.mymodel;
  }
  getSchema() {
    return this.rolesSchema;
  }
//agregacion de todo
  agregateTodo(name, description, date, hour) {
      var todo = {
          name, 
          description,
          date,
          hour,
      }
    var newtodo = new this.mymodel(todo);
    return new Promise((resolve, reject) => {
      newtodo.save().then((docs) => {
        console.log("registrado todo o todo registrado")
        resolve(docs);
      });
    });
  }
//----------------R mostrar
async getTodos()
{
    return new Promise((resolve, reject) => {
        this.mymodel.find({}, (err, docs) => {
            if(err){
                console.log(err);
                resolve(err);
                return;
            }
            resolve(docs);

        });
    });
}
/*
crudd   U      update actualizamos
*/ 
updateModel(id, todoUpdate){
    //utilixamos promesas
    return new Promise((resolve, reject) => {
        this.mymodel.update({ _id: id }, { $set: todoUpdate }, (err, docs) =>{
                    if(err){
                        console.log(err);
                        resolve(err);
                        return;
                    }
                    resolve(docs);
        } );
    });
    
}
/**
 crudddd    D    delete
 */
deleteTodo(id){
    return new Promise((resolve, reject) => {
        this.mymodel.remove({ _id: id }).then((err, docs) => {
            if(err){
                console.log(err);
                resolve(err);
                return;
            }
            resolve(docs);
        });
    } );
}

}
export default TodoModel;