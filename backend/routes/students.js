const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add a new student
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.json(student);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update student
router.put('/:id', async (req, res) => {
  try {
    await Student.update(req.body, { where: { id: req.params.id } });
    res.send('Student updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete student
router.delete('/:id', async (req, res) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    res.send('Student deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
