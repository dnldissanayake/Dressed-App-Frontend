import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button,
  MenuItem
} from '@mui/material';
import { postDesign, updateDesign } from '../../services/services.ts';

interface Design {
  id: number;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
}

interface AddUpdateDesignModalProps {
  open: boolean;
  onClose: () => void;
  selectedDesign?: Design;
}

const categories = ['Men', 'Women', 'Boy', 'Girl', 'Unisex'];

const AddUpdateDesignModal: React.FC<AddUpdateDesignModalProps> = ({ open, onClose, selectedDesign }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    fileUrl: ''
  });

  useEffect(() => {
    if (selectedDesign) {
      setForm({
        title: selectedDesign.title,
        description: selectedDesign.description,
        category: selectedDesign.category,
        fileUrl: selectedDesign.fileUrl
      });
    } else {
      setForm({
        title: '',
        description: '',
        category: '',
        fileUrl: ''
      });
    }
  }, [selectedDesign]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      let response;
      if (selectedDesign) {
        response = await updateDesign(selectedDesign.id, form);
        if (response.ok) {
          alert('Design updated successfully!');
        }
      } else {
        response = await postDesign(form);
        if (response.status === 201) {
          alert('Design posted successfully!');
        }
      }
      
      setForm({
        title: '',
        description: '',
        category: '',
        fileUrl: ''
      });
      onClose();
    } catch (error) {
      console.error('Error saving design:', error);
      alert('Failed to save design. Please try again.');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle className="text-2xl font-bold">
        {selectedDesign ? 'Update Design' : 'Add New Design'}
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4 py-4">
          <TextField
            label="Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
          <TextField
            select
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            fullWidth
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Image URL"
            name="fileUrl"
            value={form.fileUrl}
            onChange={handleChange}
            placeholder="Enter the URL of your design image"
            fullWidth
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUpdateDesignModal;
