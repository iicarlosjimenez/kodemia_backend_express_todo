const express = require('express')
const fs = require('node:fs');
const server = express()
const port = 8080
const fileName = "todos.json"

// Initializable
initFile()
function initFile() {
   const fileExists = fs.existsSync(fileName)

   if (!fileExists) {
      updateFile([])
   }
}

// 
server.use(express.json()) 

server.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})

// Index
server.get('/', (request, response) => {
   response.json({ status: true })
})
// Index todos
server.get('/todos', (request, response) => {
   const todos = getTodos()
   response.json(todos)
})
// Create todos
server.post('/todos', (request, response) => {
   const todos = getTodos()
   const body = request.body
   const rules = {
      'task': ['required']
   }

   const validate = validator(rules, body)
   if (validate.validated) {
      const { id = idIncrement(todos), task } = body
      const todo = {
         id: id,
         task: task
      }
      todos.push(todo)
   
      updateFile(todos)
   
      response.json(todos)
      return;
   }

   response.status(401)
   response.json(validate.messages)
})
// Update todo
server.put('/todos/:idx', (request, response) => {
   const { idx: id } = request.params

   if (isNaN(id)) {
      response.status(401)
      response.json({ status: 'error', message: 'invalid id' })
      return;
   }

   const todos = getTodos()
   const todoFind = todos.find(item => item.id == id)
   if (!!!todoFind) {
      response.status(401)
      response.json({ status: 'error', message: 'element not find' })
      return;
   }

   const body = request.body
   const rules = {
      'task': ['required']
   }
   const validate = validator(rules, body)
   if (validate.validated) {
      const { task } = body

      todos.forEach(item => {
         if (item.id == todoFind.id) {
            item.task = task
         }
      });
      updateFile(todos)

      response.json(todos)
      return;
   }

   response.status(401)
   response.json(validate.messages)
})

// Delete todo
server.delete('/todos/:idx', (request, response) => {
   const { idx: id } = request.params
   if (isNaN(id)) {
      response.status(401)
      response.json({status: 'error', message: 'invalid id'})
      return;
   }

   let todos = getTodos()
   const todoFind = todos.find(item => item.id == id)
   if (!!!todoFind) {
      response.status(401)
      response.json({ status: 'error', message: 'element not find'})
      return;
   }
   todos = todos.filter(item => item.id != todoFind.id);
   updateFile(todos)

   response.json(todos)
})

// Get ID Increment
function idIncrement(data) {
   let id = 1
   // Get Last Item
   let lastElement = data.slice(-1)[0]
   if (lastElement.hasOwnProperty("id")) 
      id = lastElement.id + 1

   return id
}

// Get Content File
function getTodos() {
   const content = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
   return content;
}
// Write File
function updateFile(todos) {
   fs.writeFileSync(fileName, JSON.stringify(todos))
}

// Validation
function validator(rules, data) {
   let validated = true
   let messages = []

   Object.entries(rules).forEach(([key, value]) => {
      // todo: Que value sea un array para validar que sea requerido, que el campo no esté vacio, el tipo de dato, etc...
      value.forEach(rule => {
         switch (rule) {
            case 'required':
               if (!data.hasOwnProperty(key)) {
                  validated = false
                  messages.push(`The field ${key} is required`)
               } else {
                  if (!data[key]) {
                     validated = false
                     messages.push(`The field ${key} is required`)
                  }
               }
               break;
            case 'number':
               if (isNaN(data[key])) {
                  validated = false
                  messages.push(`The field ${key} is not a number`)
               }
               break;
            default:
               break;
         }
      });
   });

   return {
      validated: validated,
      messages: messages
   }
}
