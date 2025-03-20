// src/app/VFX/page.tsx
"use client";
import { useEffect, useState } from 'react';

interface DataResponse {
  id: string;
  video: string;  // Assuming there is a video URL associated with the data
  name: string;   // Name or description to display
}

const VFXPage = () => {
  const [data, setData] = useState<DataResponse[]>([]);  // Changed to array to hold multiple items
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data (no dynamic ID needed)
        const response = await fetch("/data/vfx.json");
        if (!response.ok) throw new Error('Failed to fetch data');
        const result: DataResponse[] = await response.json();  // Assuming the API returns an array of objects
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
      <div className="grid grid-cols-3 gap-6">  {/* Creates a 3-column grid layout */}
        {data.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
            {/* Video Embed */}
            {item.video ? (
              <div>
                <video
                  controls
                  autoPlay
                  className="w-full h-auto"
                  src={item.video}
                />
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-4">No video available</p>
            )}

            {/* Title and additional information */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
  );
};

export default VFXPage;
