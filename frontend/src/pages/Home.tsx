import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import DeviceCard from "../cards/DeviceCard";

interface Specs {
  Brand: string,
  Model: string,
  Price_PHP: number,
  Img_Link: string,
  Display_Spec: string,
  RAM_GB : number,
  Storage_GB : number,
  Battery_mAh : number,
}

const Home: React.FC = () => {
  const [devices, setDevices] = useState<Specs[]>([]);

  useEffect(() => {
    axios
      .get<Specs[]>('http://127.0.0.1:5000/api/data')
      .then((response) => {
        setDevices(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const brandList = Array.from(new Set(devices.map(phone => phone.Brand)));

  return (
    <div className="grid grid-rows-[auto,auto] bg-custom-white">
      <header>
        <NavBar />
      </header>

      <main className="px-6 bg-gray-100">
        {brandList.map((brand, index) => (
          <section key={index}>
            <h2 className="mb-4 text-2xl font-semibold">{brand}</h2>
            <div className="flex flex-wrap gap-4">
              {devices
                .filter(phone => phone.Brand === brand)
                .map((phone, index) => (
                  <DeviceCard id={index} 
                              brand={phone.Brand} 
                              model={phone.Model} 
                              price={phone.Price_PHP} 
                              img={phone.Img_Link}
                              displaySpec={phone.Display_Spec}
                              ram={phone.RAM_GB}
                              storage={phone.Storage_GB}
                              battery={phone.Battery_mAh} />
                ))}
            </div>
          </section>
        ))}

        {/* Section for devices with brands not in brandList */}
        {/* <section>
          <h2 className="mb-4 text-2xl font-semibold">Other Devices</h2>
          <div className="flex flex-wrap gap-4">
            {devices
              .filter(phone => !brandList.includes(phone.Brand))
              .map((phone, index) => (
                <DeviceCard id={index} brand={phone.Brand} model={phone.Model} price={phone.Price_PHP} />
              ))}
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default Home;
