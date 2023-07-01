import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";

import Loading from "../components/Loading";
import facilityIcon from "../assets/towel-rack.png";
import overviewIcon from "../assets/overview_icon.svg";
import Details from "../components/Details";

const View = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [aminityArr, setAminityArr] = useState([]);
  const [currentImg, setCurrentImg] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await axios
      .get(
        `https://fractional-assets.vercel.app/villa-resort-apartment-details/${id}`
      )
      .then((res) => {
        setIsLoading(true);
        setData(res.data.data);
        setCurrentImg(res.data.data.imgArr[0]);
        setImgArr(res.data.data.imgArr);
        setAminityArr(res.data.data.aminities);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleVerify = async (id) => {
    await axios
      .patch(`https://fractional-assets.vercel.app/verify-success/${id}`)
      .then(() => getData())
      .catch((error) => console.log(error));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="villa-details-container text-gray-300">
          <section className="villa-details-r1">
            <h4 className="flex items-center gap-2">
              <span>
                <MdLocationPin />
              </span>
              {data.landmark}, {data.city}, {data.state}
            </h4>
            <Details data={data} />
          </section>

          <section className="villa-details-r2">
            <div className="villa-corousel-current-img">
              <img src={currentImg} alt="" />
            </div>
            <div className="villa-corousel-all-img">
              {imgArr.map((image) => {
                return (
                  <>
                    <img
                      src={image}
                      alt="loading..."
                      onClick={() => {
                        setCurrentImg(image);
                      }}
                    />
                  </>
                );
              })}
            </div>
          </section>

          <section className="villa-details-r3">
            <div className="overview">
              <h4 className="flex items-center gap-2 mb-3">
                <span>
                  <img src={overviewIcon} alt="overview-img-icon" />
                </span>
                About Property
              </h4>
              {data.additionalDetails ? (
                <p>{data.additionalDetails}</p>
              ) : (
                <p>
                  An excellent opportunity that features a French multinational
                  brand 'Mane' as a tenant, occupying the space since 2016. The
                  asset features an office space and a research lab that caters
                  to prominent FMCG players like Unilever, P&G and more. Their
                  infrastructure gives an obvious indication of the stickiness
                  of the tenant. Mane, a global leader of the Fragrance and
                  Flavour sector, is headquartered in France with a 1.6 billion
                  dollar turnover as of 2020. The asset is in a commercial
                  building, Imperium located in Andheri, near the metro and
                  airport. The entry yield for this property is 10.04% annually,
                  and the targeted IRR is 16.33%. The lease agreement term is
                  for five years and the lock-in period is for three years.
                </p>
              )}
            </div>
            <div className="facility-outer-wrap">
              <h4 className="flex items-center gap-2 mb-3">
                <span>
                  <img src={facilityIcon} alt="overview-img-icon" />
                </span>
                Facilities
              </h4>
              <div className="facility-inner-wrap">
                {aminityArr.map((aminity, i) => {
                  return (
                    <section className="rounded">
                      <h6>{aminity}</h6>
                    </section>
                  );
                })}
              </div>
            </div>
            <h1 className="w-fit mx-auto mt-10 text-lg">
              {`Status - ${data.isVerified ? "Verified" : "Not Verified"}`}
            </h1>
            {!data.isVerified && (
              <div className="flex space-x-10 justify-center mt-10">
                <button
                  onClick={() => handleVerify(data._id)}
                  className="px-10 py-2 text-lg font-medium text-center duration-300 text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-green-600 dark:text-white dark:border-gray-600 dark:hover:bg-green-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Verify
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default View;
