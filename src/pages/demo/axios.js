import React, { useEffect, useState } from 'react';
import api from "../../utils/api" // 导入公共函数

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get('/some-endpoint', { param: 'value' });
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data}
    </div>
  );
}

export default MyComponent;
