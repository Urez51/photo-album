const ReactDOMServer = require('react-dom/server');
const React = require('react');
const todoRouter = require('express').Router();
const { Task } = require('../../db/models');
const TodoList = require('../../views/TodoList');
const TaskView = require('../../views/Task');

todoRouter.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    res.json(tasks);
  } catch (error) {
    res.redirect('/error');
  }
});

todoRouter.get('/done', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
      where: {
        done: true,
      },
    });
    res.json(tasks);
  } catch (error) {
    res.redirect('/error');
  }
});

// POST-запрос на создание новой задачи
todoRouter.post('/', async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
  });

  res
    .status(201)
    .renderComponent(TaskView, { task }, { doctype: false });

  // res.json(task);
});

// параметризированный запрос
// словит запросы на url /tasks/delete/1, /tasks/delete/2 и.т.
todoRouter.delete('/:id', async (req, res, next) => {
  try {
    // удаляем задачу с заданным id
    const removedCount = await Task.destroy({
      where: {
        // в req.params.id ляжет соответсвующая часть URL
        id: Number(req.params.id),
      },
    });

    if (removedCount === 0) {
      res
        .status(404)
        .json({ success: false, message: 'Нет такой задачи' });
    } else {
      res.json({ success: true });
    }
  } catch (er) {
    next(er);
  }
});

// параметризированный запрос
// словит запросы на url /tasks/toggle/1, /tasks/toggle/2 и.т.
todoRouter.put('/:id', async (req, res, next) => {
  try {
    // достаём из БД задачу с заданным id
    const task = await Task.findByPk(Number(req.params.id));

    if (!task) {
      res
        .status(404)
        .json({ success: false, message: 'Нет такой задачи' });

      return;
    }

    // меняем состояние задачи и сохраняем в БД
    if ('title' in req.body) task.title = req.body.title;
    if ('done' in req.body) task.done = req.body.done;
    await task.save();

    res.json({ success: true });
  } catch (er) {
    next(er);
  }
});

module.exports = todoRouter;
