import axios from "axios";
import { useEffect, useState } from "react";

const useFoods = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getFoods();
  }, []);

  return data;
};

export default useFoods;
