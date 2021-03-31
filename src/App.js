import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from './firebase'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import "./index.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const ref = firebase.firestore().collection('appointments');

  useEffect(() => {
    const fetchTasks = async () => {
      const db = firebase.firestore().collection('appointments');
      const res = await db.get();
      const docs = res.docs;
      const data = [];
      docs.forEach(doc => data.push(doc.data()));

      return data;
    };

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      console.log('TASKS: ', tasksFromServer);
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);



  // Fetch Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(
  //     `https://my-json-server.typicode.com/rosedarline/appointment-json-server/tasks/${id}`
  //   );
  //   const data = await res.json();
  //   return data;
  // };
  // Add Task
  const addTask = async (task) => {
    const { serverTimestamp } = firebase.firestore.FieldValue;
    ref.add({
      ...task,
      createdAt: serverTimestamp(),
    }).then((document) => {
      ref.doc(document.id).update({ id: document.id });
      setTasks([...tasks, task]);
    });
  };

  // Delete Task
  const deleteTask = async (id) => {
    ref.doc(id).delete();

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    ref.doc(id).update({ reminder: true });

    setTasks();
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask} />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder} />
              ) : (
                "No Appointments To Show"
              )}
            </>
          )} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
