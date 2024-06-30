import React from 'react';

export const ContainerContent = ({ children, tasks, onDrop, onDragOver, onClearTasks, updateTask, deleteTask }) => {
  return (
    <div className='container-content' onDrop={onDrop} onDragOver={onDragOver}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { tasks, onClearTasks, updateTask, deleteTask })
      )}
    </div>
  );
};
