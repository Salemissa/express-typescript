import express, { Router } from 'express';
import supabase from '../supabaseClient';

export const router = express.Router();
// Create a new student
router.post('/students', async (req, res) => {
  const { name, phone } = req.body;
  const { data, error } = await supabase
    .from('students')
    .insert([{ name, phone }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
});

// Get all students
router.get('/students', async (req, res) => {
    let { data: students, error } = await supabase
    .from('students')
    .select('*')

 

  console.log(students);
  console.log(error);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(students);
});

// Get a student by ID
router.get('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  console.log(data)

  res.status(200).json(data);
});

// Update a student by ID
router.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, phone } = req.body;
  const { data, error } = await supabase
    .from('students')
    .update({ name, phone })
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
});

// Delete a student by ID
router.delete('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('students')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(204).json(data);
});

export default router;
