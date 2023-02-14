import axios from "axios";
import { useEffect, useState } from "react";

const useRestaurants = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getRestaurant();
  }, []);

  return data;
};

export default useRestaurants;
