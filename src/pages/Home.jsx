import axios from "axios";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getVerificationData } from "../store/slice";

import Table from "../components/Table";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [verificationData, setVerificationData] = useState([]);

  const getVerificationData = async () => {
    await axios
      .get(`https://fractional-assets.vercel.app/data-sent-for-verification`)
      .then((data) => {
        setIsLoading(true);
        setVerificationData(data.data.list);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getVerificationData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="block 2xl:xl:hidden">
            <Cards data={verificationData} />
          </div>
          <div className="hidden 2xl:block">
            <Table data={verificationData} />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
