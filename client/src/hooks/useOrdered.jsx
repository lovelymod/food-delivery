import axios from "axios";
import { useEffect, useState } from "react";

const useOrdered = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const customer_id = localStorage.getItem("customer_id");
    const realUrl = url + "/" + customer_id;

    const getOrdered = async () => {
      await axios
        .get(realUrl)
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
