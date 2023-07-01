import axios from "axios";
import { useState, useEffect } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BiDotsVerticalRounded, BiLogOutCircle } from "react-icons/bi";

import Table from "../components/Table";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [verificationData, setVerificationData] = useState([]);

  const actions = [
    { icon: <BiLogOutCircle className="text-xl" />, name: "logout" },
    { icon: <BiLogOutCircle className="text-xl" />, name: "logout" },
    { icon: <BiLogOutCircle className="text-xl" />, name: "logout" },
    { icon: <BiLogOutCircle className="text-xl" />, name: "logout" },
  ];

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
      <SpeedDial
        ariaLabel="SpeedDial basic example"
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
