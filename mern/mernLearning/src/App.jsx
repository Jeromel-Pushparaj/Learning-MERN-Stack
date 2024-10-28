import { useState, useEffect } from "react"

function App() {
  const [todos, setTodos] = useState([])
  useEffect(function () {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
      .then(resp => {
        console.log('resp', resp)
        return resp.json()
      }).then(data => {
        console.log('data', JSON.parse(JSON.stringify(data)))
        setTodos(data)
      }).catch(err => {
        console.error(err)
      })
  }, [])

  return <>
    <h3>hello there</h3>
    <hr />
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, idx) => (
          <tr key={idx}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

export default App
