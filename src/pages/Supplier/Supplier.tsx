import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { getDesigns } from '../../services/services.ts';

interface Design {
  id: number;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
}

const ViewDesigns: React.FC = () => {
  const [designs, setDesigns] = useState<Design[]>([]);

  useEffect(() => {
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

    fetchDesigns();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mt-5 mb-10">Available Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {designs.map((design) => (
          <Card key={design.id}>
            <CardContent>
              <Typography variant="h5">{design.title}</Typography>
              <Typography>{design.description}</Typography>
              <Typography>Category: {design.category}</Typography>
              {design.fileUrl && (
                <img 
                  src={design.fileUrl}
                  alt={design.title}
                  className="w-1/2  object-cover mt-2"
                />
              )}
              <Button variant="contained" className="mt-2">
                Submit Quote
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewDesigns;
