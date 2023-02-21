import axios from "axios";
import React from "react";
import TaskForm from "../forms/taskform";
import Navbar from "../navigation/navbar";

const Home = ({ loggedIn, setLoggedIn, userId }) => {
  const setUserItems = (text) => {
    axios
      .get("https://todolistbers.herokuapp.com/tasks/getall", {
        text: text,
        user_id: userId,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      {loggedIn ? (
        <TaskForm
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userId={userId}
          setUserItems={setUserItems}
        />
      ) : (
        <div className="stars">
          <div className="twinkling">
            <div className="home-container">
              <h1 className="title">To Do List</h1>

              <div className="content-container">
                <h3 className="content-message">Create your own to do list.</h3>

                <ul className="content-list">
                  <li>Tasks that need to be done at the office</li>
                  <li>Help with finishing chores at the house</li>
                  <li>Create a list for errands to run</li>
                  <li>Add as many items as you want</li>
                  <li>Then remove them when completed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
