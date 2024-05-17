// import { MdOutlinePhoneIphone } from "react-icons/md"

import DeviceCard from "../cards/DeviceCard"
import FeaturedCard from "../cards/FeaturedCard"
// import Test from "./pages/Test"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";

interface Message {
  brand: string;
  model: string;
  price: string;
}


const Home: React.FC = () =>{
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios
      .get<Message[]>('http://127.0.0.1:5000/api/data')
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className=" grid grid-rows-[auto,auto] bg-custom-white">
      {/* <header className=" h-20 bg-mainColor text-white flex items-center px-6">
        <span className="text-2xl"><MdOutlinePhoneIphone /></span>
        <h1 className="text-2xl font-semibold"> Mobile Device Shop</h1>
        
      </header> */}
      <header>
        <NavBar />
      </header>

      <form action="">
      <label className="block font-bold mb-2" htmlFor="camera">
                  Camera
                </label>
                <input
                  className="border rounded-lg py-2 px-4 w-full"
                  id="camera"
                  placeholder="Enter camera megapixels"
                  type="number"
                />
      </form>

      <main className="px-6">
        <section className="mb-4">
          <h2 className="mb-4 text-2xl font-semibold">Featured Devices</h2>
          <div className="flex flex-wrap gap-4">
              {/* <FeaturedCard name="iPhone 12" screen="6.1-inch Super Retina XDR display"/>
              <FeaturedCard name="Samsung Galaxy S21" screen="6.2-inch Dynamic AMOLED 2X display"/> */}
              {messages.map((message) => (
                <FeaturedCard name={`${message.brand} ${message.model}`} screen={`₱ ${message.price}`} />
              // <tr key={index}>
              //   <td>{message.brand}</td>
              //   <td></td>
              // </tr>
            ))}

          </div>
        </section>


        <section>
          <h2 className="mb-4 text-2xl font-semibold">All Devices</h2>
          <div className="flex flex-wrap gap-4">
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
          </div>
        </section>
      </main>
      {/* <Test /> */}
      
    </div>
  )
}

export default Home