const ReactDOMServer = require('react-dom/server');
const React = require('react');
const todoRouter = require('express').Router();
const { Task } = require('../../db/models');
const TodoList = require('../../views/TodoList');
// const TaskView = require('../../views/Task');

// страница /tasks. Достаём задачи из БД и отображаем их.
todoRouter.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });

    res.renderComponent(TodoList, { tasks });
  } catch (error) {
    res.redirect('/error');
  }
});

module.exports = todoRouter;
