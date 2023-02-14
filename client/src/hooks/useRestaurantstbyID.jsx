import axios from "axios";
import { useEffect, useState } from "react";

const useRestaurantsbyID = (url) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getStore = async () => {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };
    getStore();
  }, []);

  return data;
};

export default useRestaurantsbyID;
