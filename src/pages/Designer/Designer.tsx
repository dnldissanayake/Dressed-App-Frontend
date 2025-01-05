import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import AddUpdateDesignModal from '../../component/modals/addUpdateDesignModal.tsx';
import { getDesigns, deleteDesign } from '../../services/services.ts';
import DesignerCard from '../../component/DesignerCard/DesignerCard.tsx';

interface Design {
  id: number;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
}

const Designer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [designs, setDesigns] = useState<Design[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<Design | undefined>(undefined);

  useEffect(() => {
    fetchDesigns();
  }, [isModalOpen]);

  const fetchDesigns = async () => {
    try {
      const response = await getDesigns();
      if (response.status === 200) {
        setDesigns(response.data);
      }
    } catch (error) {
      console.error('Error fetching designs:', error);
    }
  };

  const handleEditDesign = (design?: Design) => {
    setSelectedDesign(design);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedDesign(undefined);
    setIsModalOpen(false);
    fetchDesigns();
  };

  const handleDeleteDesign = async (id: number) => {
    try {
      const response = await deleteDesign(id);
      if (response.status === 200) {
        fetchDesigns();
      } else {
        throw new Error('Failed to delete design');
      }
    } catch (error) {
      console.error('Error deleting design:', error);
    }
  };

  return (
    <div className="p-4 mt-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Designer Dashboard</h1>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => handleEditDesign(undefined)}
        >
          Add Design
        </Button>
      </div>

      {designs.length === 0 ? (
        <Typography variant="h6" className="text-center mt-10">
          No any Designs yet!
        </Typography>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {designs.map((design) => (
          <DesignerCard
          title="Some Title"
          description="Description"
          category="Category"
          isDesigner={true}
          onEdit={() => handleEditDesign(design)}
          onDelete={() => handleDeleteDesign(design.id)}
        />
          ))}
        </div>
      )}

      <AddUpdateDesignModal 
        open={isModalOpen} 
        onClose={handleCloseModal}
        selectedDesign={selectedDesign}
      />
    </div>
  );
};

export default Designer;
