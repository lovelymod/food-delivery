import axios from "axios";
import { useEffect, useState } from "react";

const useGetOrder = (url, val) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getOrder = async () => {
      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };

    getOrder();
  }, [val]);

  return data;
};

export default useGetOrder;
