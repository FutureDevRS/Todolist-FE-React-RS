import React, { useState, useEffect } from "react";
import axios from "axios";

import { Calendar } from '@mantine/dates';
import { Indicator } from '@mantine/core';


const TaskForm = ({ userId, data }) => {
  const [task, setTask] = useState("");
  const [userItems, setUserItems] = useState([]);
  const [value, setValue] = useState(null);

  


  useEffect(() => {

    getUserItems();
  // eslint-disable-next-line
  }, []);

  const getUserItems = () => {
    axios
      .get(`https://git.heroku.com/todolistbers.git/tasks/getall/${userId}`)
      .then((res) => {
        console.log("getting >>>>>", res.data);
        setUserItems(res.data);
      })
      .catch((error) => {
        console.log("error getting", error);
      });
  };
  

  const handleAddTask = (e) => {
    e.preventDefault();
    

    axios
      .post("https://git.heroku.com/todolistbers.git/tasks/add", {
        text: task,
        user_id: userId,
      })
      .then(() => {
        console.log("task added succesfully!");
        getUserItems(data);
      })
      .catch((error) => {
        console.log("Error with creating a new task, please try again", error);
      });
  };

  const handleDeleteTask = async (userItemId) => {
    console.log(userItemId);
    try {
      const response = await axios.delete(
        `https://git.heroku.com/todolistbers.git/tasks/delete/${userItemId}`
      );
      console.log("response", response);
      setUserItems(userItems.filter((task) => task.id !== userItemId));
    } catch (error) {
      console.log("error", error);
    }
  };

  

  return (
    <>
    <div className="stars">
        <div className="twinkling">
    <div className="task-form-container">
      <div className="tasks-form">
        <h2>Add your tasks here!</h2>

        <div className="input-section">
          <input
            type="text"
            className="task-input"
            placeholder="Insert task here"
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />
          <button
            type="submit"
            className="submit-task-btn"
            onClick={handleAddTask}
          >
            Add Task
          </button>

          
        </div>
        <div className="chores">
          {" "}
          {userItems.map((userItem) => {
            return (
              <div key={userItem.id}>
                <div className="task">{userItem.text}</div>
                <button className="delete-task" onClick={() => handleDeleteTask(userItem.id)}>
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="calendar-container">
      <Calendar  
          value={value}
          onChange={setValue}
          amountOfMonths={1}
          
          
          renderDay={(date) => {
            const day = date.getDate();
            const currentDate = new Date();
            return (
              <Indicator size={6} color="blue" offset={8} disabled={day !== currentDate.getDate()}>
                <div>{day}</div>
              </Indicator>
            );
          }}
        />
        </div>
  </div>
  </div>
</div>

   
    </>
  );
};

export default TaskForm;
