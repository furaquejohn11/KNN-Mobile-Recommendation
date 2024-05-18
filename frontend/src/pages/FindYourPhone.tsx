import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from 'axios';
import { useState, useEffect } from "react";
import MobileCard from "../cards/MobileCard";

interface Specs {
  Brand: string;
  Model: string;
  Price_PHP: number;
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
    <div className="px-6">
      <NavBar />
      <h2>{`Recommended Phones for ${display} inch, ${ram} ram, ${storage} GB, ${battery} mAh, with the budget of PHP ${budget} :`}</h2>
      {/* <ul>
        {recommendedPhones.map((phone, index) => (
          <li key={index}>{phone.Brand} {phone.Model} {phone.Price_PHP}</li>
        ))}
      </ul> */}
      <main className=" flex flex-wrap gap-4">
        {recommendedPhones.map((phone, index) => (
          <MobileCard id={index} brand={phone.Brand} model={phone.Model} price={phone.Price_PHP} />
        ))}
      </main>
    </div>
  );
};

export default FindYourPhone;
