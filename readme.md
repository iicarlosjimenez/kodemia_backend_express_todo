# Práctica de ExpressJS
Ésta es una pequeña práctica para entender el funcionamiento del framework ExpressJS y con un archivo JSON para la permanecia de datos. 

Actualmente, solo se puede:
- Action: Consultar Todos. Method: GET. Endpoint: [http://localhost:8080/todos](http://localhost:8080/todos).
- Action: Agregar un Todo. Method: POST. Endpoint: [http://localhost:8080/todos](http://localhost:8080/todos). Body: {"task": "Tarea de ejemplo"}
- Action: Editar un Todo. Method: PUT. Endpoint: [http://localhost:8080/todos/[id]](http://localhost:8080/todos/:id). Body: {"task": "Tarea Modificada"}
- Action: Eliminar un Todo. Method: DELETE. Endpoint: [http://localhost:8080/todos/[id]](http://localhost:8080/todos/:id).

## Notas
- El ID es Autoincrementable

## Ejecutar aplicación
Para ejecutar el servidor, es necesario ejecutar el comando:
`npm run dev`
