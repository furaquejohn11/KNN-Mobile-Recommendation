import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from 'axios';
import { useState, useEffect } from "react";
// import MobileCard from "../cards/MobileCard";
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


const FindYourPhone: React.FC = () => {
  const [recommendedPhones, setRecommendedPhones] = useState<Specs[]>([]);
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
        console.log('Received response from Flask:', response.data);
        setRecommendedPhones(response.data);
      } catch (error) {
        console.error('Error sending data to Flask:', error);
      }
    };

    sendDataToFlask();
  }, [display, ram, storage, battery, budget]);

  return (
    <div className=" bg-gray-100">
      <NavBar />
      <h2 className="px-6">{`Recommended Phones for ${display} inch, ${ram} ram, ${storage} GB, ${battery} mAh, with the budget of PHP ${budget} :`}</h2>
      {/* <ul>
        {recommendedPhones.map((phone, index) => (
          <li key={index}>{phone.Brand} {phone.Model} {phone.Price_PHP}</li>
        ))}
      </ul> */}
      <main className=" flex flex-wrap gap-4 px-6">
        {recommendedPhones
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
          ))}
      </main>
    </div>
  );
};

export default FindYourPhone;
