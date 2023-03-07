import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskRequest, fetchTasksRequest, deleteTaskRequest } from 'Src/actions/taskActions';

// components
import HeaderComponent from 'Src/components/HeaderComponent';
import FooterComponent from 'Src/components/FooterComponent';
import SubscribeComponent from './SubscribeComponent';
import VideosComponent from './VideosComponent';
import SlideComponent from './SlideComponent';
import CategoriesListComponent from './CategoriesListComponent';
import SearchResultComponent from './SearchResultComponent';

const HomePage = (_props) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksRequest());
  }, []);

  const handleAddTask = () => {
    const newTask = {
      ...selectedTask,
      id: Date.now()
    };

    dispatch(addTaskRequest(newTask));

    setSelectedTask(null);
  };

  const handleRemoveTask = (taskId) => {
    dispatch(deleteTaskRequest(taskId));
  };

  const handleChange = (e) => {
    const {target} = e;
    const {name, value} = target;
    setSelectedTask({
      [name]: value
    });
  };

  return (
    <>
      <HeaderComponent />
      <SlideComponent />

      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div data-uk-grid>
            <CategoriesListComponent />

            <SearchResultComponent />
          </div>
        </div>
      </div>

      <VideosComponent />
      <SubscribeComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
