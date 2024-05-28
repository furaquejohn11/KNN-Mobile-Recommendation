import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import DeviceCard from "../cards/DeviceCard";
import SkeletonCard from '../cards/SkeletonCard';
import { Specs } from '../types/Specs';

const Home: React.FC = () => {
  const [devices, setDevices] = useState<Specs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Specs[]>('http://127.0.0.1:5000/api/data')
      .then((response) => {
        setDevices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        alert('There was an error fetching the data!');
        setLoading(false);
      });
  }, []);

  const brandList = Array.from(new Set(devices.map(phone => phone.Brand)));

  return (
    <div className="min-h-screen bg-custom-white">
      <header className="sticky top-0 z-10">
          <NavBar />
      </header>
      
      <main className="px-6 py-4 bg-gray-100">
        {loading ? (
          <div className='flex flex-wrap gap-6'>
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>     
        ) : 
          brandList.map((brand, index) => (
            <section key={index} className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">{brand}</h2>
              <div className="flex flex-wrap gap-4">
                {devices
                  .filter(phone => phone.Brand === brand)
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
                      shopLink={phone.Shop_Link}
                      processor={phone.Processor}
                    />
                  ))}
              </div>
            </section>
          ))
        }
      </main>
    </div>
  );
}

export default Home;