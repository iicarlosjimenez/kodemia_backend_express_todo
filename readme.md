# Práctica de ExpressJS
Ésta es una pequeña práctica para entender el funcionamiento del framework ExpressJS y con un archivo JSON para la permanecia de datos. 

Actualmente, solo se puede:
<table>
   <thead>
      <tr>
         <th>Method</th>
         <th>Endpoint</th>
         <th>Body</th>
         <th>Action</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>GET</td>
         <td>http://localhost:8080/todos</td>
         <td>N/A</td>
         <td>Consultar to-dos</td>
      </tr>
      <tr>
         <td>POST</td>
         <td>http://localhost:8080/todos</td>
         <td>{"task": "Tarea de ejemplo"}</td>
         <td>Agregar un to-do</td>
      </tr>
      <tr>
         <td>PUT</td>
         <td>http://localhost:8080/todos/{id}</td>
         <td>{"task": "Tarea Modificada"}</td>
         <td>Editar un to-do</td>
      </tr>
      <tr>
         <td>DELETE</td>
         <td>http://localhost:8080/todos/{id}</td>
         <td>N/A</td>
         <td>Eliminar un to-do</td>
      </tr>
   </tbody>
</table>

## Notas
- El ID es Autoincrementable

## Ejecutar aplicación
1. Una vez clonado el proyecto, es necesario instalar las dependencias de NodeJS mediante el comando: `npm install`
2. Para ejecutar el servidor, es necesario ejecutar el comando: `npm run dev`
