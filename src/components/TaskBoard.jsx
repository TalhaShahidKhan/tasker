import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import NoTaskFound from "./NoTaskFound";
import SearchForm from "./SearchForm";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTasks = [
    {
      id: crypto.randomUUID(),
      title: "Integration API",
      description:
        "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      tags: ["web", "backend", "python"],
      priority: "High",
      isFav: true,
    },
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddTaskModal(false);
  };

  const handleUpdateTask = (task) => {
    setTaskToUpdate(task);
    setShowAddTaskModal(true);
  };

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleFav = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFav = !newTasks[taskIndex].isFav;
    setTasks(newTasks);
  };

  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);
  };
  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddTaskModal && (
          <AddTaskForm
            onSave={handleAddTask}
            hideModal={() => {
              setShowAddTaskModal(false);
              setTaskToUpdate(null);
            }}
            taskToUpdate={taskToUpdate}
          />
        )}
        <div className="container mx-auto">
          <div className="p-2 flex justify-end">
            <SearchForm onSearch={handleSearch} />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              onAddClick={() => setShowAddTaskModal(true)}
              onDeleteAll={handleDeleteAll}
            />
            {tasks.length > 0 ? (
              <TaskList
                taskItems={tasks}
                taskUpdate={handleUpdateTask}
                onDelete={handleTaskDelete}
                onFav={handleFav}
              />
            ) : (
              <NoTaskFound />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
