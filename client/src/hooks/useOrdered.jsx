import axios from "axios";
import { useEffect, useState } from "react";

const useOrdered = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getOrdered = async () => {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getOrdered();
  }, []);

  return data;
};

export default useOrdered;
