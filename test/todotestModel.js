import TodoModel from "../models/todoModel.js";
var inittest = async () => {
  var todomodel = new TodoModel();
  todomodel.agregateTodo(
    "Test1",
    "Test 1 descripcion",
    new Date(),
    "hour",
  );
  todomodel.agregateTodo(
    "Test2",
    "Test 2 descripcion",
    new Date(),
    "hour",
  );
  todomodel.agregateTodo(
    "Test3",
    "Test 3 descripcion",
    new Date(),
    "hour",
  );
  console.log(await todomodel.getTodos());
  //usermodel.deleteUser("60146018e49f7308a951795c");

  //await usermodel.updateModel("60146018e49f7308a951795d", { name: "Ramon" });
  //console.log(await usermodel.getUsers());
};

inittest();