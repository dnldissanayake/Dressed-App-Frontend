import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface DesignerCardProps {
  title: string;
  description: string;
  category: string;
  fileUrl?: string;
  isDesigner?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const DesignerCard: React.FC<DesignerCardProps> = ({
  title,
  description,
  category,
  fileUrl,
  isDesigner = false,
  onEdit,
  onDelete,
}) => {
  return (
    <Card>
      <CardContent>
        <div className="flex">
          <div className="flex-1 pr-4 text-left flex flex-col justify-between">
            <div>
              <Typography  className="text-left" sx={{ fontWeight: 'bold' , fontSize: '1rem' }}>{title}</Typography>
              <Typography className="text-left" sx={{ fontSize: '0.8rem' }}>Category: {category}</Typography>
              <Typography className="text-left pt-4" sx={{ fontSize: '0.8rem' }}>{description}</Typography>
            </div>
            <div className="flex gap-2">
              
              {isDesigner ? (
                <>
                  <Button variant="outlined" color="primary" onClick={onEdit}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" onClick={onDelete}>
                    Delete
                  </Button>
                </>
              ): 
              <Button variant="contained">
                Submit Quote
              </Button>}
            </div>
          </div>
            <div className="w-1/2">
              <img 
                src={fileUrl}
                alt={title}
                className="w-full object-cover"
              />
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DesignerCard; 