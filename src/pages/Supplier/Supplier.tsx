import React, { useEffect, useState } from 'react';
import { getDesigns } from '../../services/services.ts';
import DesignerCard from '../../component/DesignerCard/DesignerCard.tsx';

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
      <h1 className="text-2xl font-bold mt-5 mb-10 text-start">Available Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {designs.map((design) => (
          <DesignerCard
            key={design.id}
            title={design.title}
            description={design.description}
            category={design.category}
            fileUrl={design.fileUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewDesigns;
