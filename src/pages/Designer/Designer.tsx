import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import { postDesign } from '../../services/services.ts';

const categories = ['Men', 'Women', 'Boy', 'Girl', 'Unisex'];

const PostDesign: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await postDesign(form);
      if (response.status === 200) {
        alert('Design posted successfully!');
        setForm({
          title: '',
          description: '', 
          category: ''
        });
      }
    } catch (error) {
      console.error('Error posting design:', error);
      alert('Failed to post design. Please try again.');
    }
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center max-w-2xl mx-auto">
      <h1 className="text-2xl mb-4">Post a New Design</h1>
      <form className="flex flex-col gap-4">
        <TextField
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <TextField
          select
          label="Category"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PostDesign;
