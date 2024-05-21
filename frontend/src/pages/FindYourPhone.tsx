import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from 'axios';
import DeviceCard from "../cards/DeviceCard";
import SkeletonCard from "../cards/SkeletonCard";

interface Specs {
  Brand: string,
  Model: string,
  Price_PHP: number,
  Img_Link: string,
  Display_Spec: string,
  RAM_GB: number,
  Storage_GB: number,
  Battery_mAh: number,
}

const FindYourPhone: React.FC = () => {
  const [recommendedPhones, setRecommendedPhones] = useState<Specs[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { display, ram, storage, battery, budget } = location.state || {};

  useEffect(() => {
    const sendDataToFlask = async () => {
      try {
        console.log('Sending data to Flask:', { display, ram, storage, battery, budget });
        const response = await axios.post('http://127.0.0.1:5000/api/find-phone', {
          display,
          ram,
          storage,
          battery,
          budget,
        });
        setLoading(false);
        console.log('Received response from Flask:', response.data);
        setRecommendedPhones(response.data);
      } catch (error) {
        console.error('Error sending data to Flask:', error);
        alert('Error sending data to Flask');
        setLoading(false);
      }
    };

    sendDataToFlask();
  }, [display, ram, storage, battery, budget]);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-4">{`Recommended Phones for ${display} inch, ${ram}GB RAM, ${storage}GB Storage, ${battery} mAh, with a budget of PHP ${budget}:`}</h2>
        <main className="flex flex-wrap gap-4">
          {loading ? (
            <div className="flex flex-wrap gap-6">
              {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : recommendedPhones.length === 0 ? (
            <div>
              <h1>There's no available phone with the given specs</h1>
            </div>
          ) : (
            recommendedPhones
              .sort((a, b) => b.Price_PHP - a.Price_PHP)  // Sort in descending order based on price
              .map((phone, index) => (
                <DeviceCard 
                  key={index} 
                  id={index} 
                  brand={phone.Brand} 
                  model={phone.Model} 
                  price={phone.Price_PHP} 
                  img={phone.Img_Link}
                  displaySpec={phone.Display_Spec}
                  ram={phone.RAM_GB}
                  storage={phone.Storage_GB}
                  battery={phone.Battery_mAh} 
                />
              ))
          )}
        </main>
      </div>
    </div>
  );
};

export default FindYourPhone;
