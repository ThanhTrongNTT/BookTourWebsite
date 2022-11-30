import { useEffect, useState } from "react";
import axios from "~/api/axios";

export function useGetTourById(id) {
  const [tourDetail, setTourDetail] = useState([]);
  useEffect(() => {
    axios.get(`tour/${id}`).then((response) => {
      console.log(response.data.tourDetail);
      setTourDetail(response.data.tourDetail);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    tourDetail,
  };
}
