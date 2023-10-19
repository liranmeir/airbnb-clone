import { useState } from 'react';

export default function TaskScreen() {
  const tasksArray = [
    {
      id: 1,
      name: 'Task 1',
      completed: false,
      dueTime: '2023-10-19T19:30:00.000Z',
    },
    {
      id: 2,
      name: 'Task 2',
      completed: false,
      dueTime: '2023-10-19T19:10:00.000Z',
    },
    {
      id: 3,
      name: 'Task 3',
      completed: false,
      dueTime: '2023-10-19T19:15:00.000Z',
    },
  ];
  //
  return (
    <div>
      <h1>Task Screen</h1>
    </div>
  );
}
