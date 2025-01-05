import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddUpdateDesignModal from '../../component/modals/addUpdateDesignModal.tsx';

const Designer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 mt-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Designer Dashboard</h1>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleOpenModal}
        >
          Add Design
        </Button>
      </div>

      {/* Your existing designer page content */}

      <AddUpdateDesignModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Designer;
