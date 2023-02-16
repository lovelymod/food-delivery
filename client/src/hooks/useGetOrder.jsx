import axios from "axios";
import { useEffect, useState } from "react";

const useGetOrder = (url, value) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const customer_id = localStorage.getItem("customer_id");
    const realUrl = url + "/" + customer_id;

    const getOrder = async () => {
      await axios
        .get(realUrl)
        .then((res) => {
          setData(res.data.sort((a, b) => b.id - a.id));
        })
        .catch((err) => console.log(err));
    };

    getOrder();
  }, [value]);

  return data;
};

export default useGetOrder;
