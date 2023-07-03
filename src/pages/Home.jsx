import axios from "../axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded, BiLogOutCircle } from "react-icons/bi";

import Table from "../components/Table";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const Home = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationData, setVerificationData] = useState([]);

  const getVerificationData = async () => {
    await axios
      .get(`/data-sent-for-verification`)
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

  const actions = [
    {
      icon: (
        <BiLogOutCircle
          onClick={() => navigate("/")}
          className="text-xl text-red-500"
        />
      ),
      name: "Logout",
    },
  ];

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
      <SpeedDial
        ariaLabel=""
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<BiDotsVerticalRounded className="text-xl" />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Home;
