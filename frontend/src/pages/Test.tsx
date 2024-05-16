import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface Message {
  brand: string;
  model: string;
}

const Test: React.FC = () => {
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
    <div className="App">
      <header className="App-header">
        <h1>Mobile Devices</h1>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index}>
                <td>{message.brand}</td>
                <td>{message.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default Test;