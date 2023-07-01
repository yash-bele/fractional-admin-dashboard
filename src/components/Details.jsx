const Details = ({ data }) => {
  return (
    <>
      <section>
        <div className="villa-details-table">
          <section>
            <p>Seller</p>
            <p className="villa-details-table-value">
              {data.sellerName || "---"}
            </p>
          </section>
          <div className="villa-details-table-dummy-border"></div>
          <section>
            <p>Property Age</p>
            <p className="villa-details-table-value">
              {data.propertyAge || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Property Area</p>
            <p className="villa-details-table-value">
              {data.area ? `${data.area} sqft` : "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Total Shares</p>
            <p className="villa-details-table-value">
              {data.totalShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Available Shares</p>
            <p className="villa-details-table-value">
              {data.availableShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Price Per Share</p>
            <p className="villa-details-table-value">
              {data.perSharePrice || "---"}
            </p>
          </section>
        </div>

        {/* details table in mobile view */}
        <div className="villa-details-mobile-table bg-gray-900 text-gray-300">
          <table>
            <thead>
              <tr>
                <th scope="col">Seller</th>
                <th scope="col">Property Age</th>
                <th scope="col">Property Area</th>
                <th scope="col">Total Shares</th>
                <th scope="col">Available Shares</th>
                <th scope="col">Price Per Share</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Seller">
                  {data.sellerName || <p>not given</p>}
                </td>
                <td data-label="Property Age">
                  {data.propertyAge || <p>not given</p>}
                </td>
                <td data-label="Property Area">
                  {data.propertyArea || <p>not given</p>}
                </td>
                <td data-label="Total Shares">
                  {data.totalShares || <p>not giver</p>}
                </td>
                <td data-label="Available Shares">
                  {data.availableShares || <p>not given</p>}
                </td>
                <td data-label="Price Per Share">
                  {data.perSharePrice || <p>not given</p>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* details table in mobile view ends */}
      </section>

      {/* ===== Second Row ===== */}

      <section>
        <div className="villa-details-table">
          <section>
            <p>Seller Type</p>
            <p className="villa-details-table-value">
              {data.sellerType || "---"}
            </p>
          </section>
          <div className="villa-details-table-dummy-border"></div>
          <section>
            <p>Rera Id</p>
            <p className="villa-details-table-value">{data.reraId || "---"}</p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Bedrooms</p>
            <p className="villa-details-table-value">{data.bedroom || "---"}</p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Bathrooms</p>
            <p className="villa-details-table-value">
              {data.bathroom || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Rent Price</p>
            <p className="villa-details-table-value">
              {data.rentPrice || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Posted On</p>
            <p className="villa-details-table-value">
              {data.postedOn || "---"}
            </p>
          </section>
        </div>

        {/* details table in mobile view */}
        <div className="villa-details-mobile-table bg-gray-900 text-gray-300">
          <table>
            <thead>
              <tr>
                <th scope="col">Seller Type</th>
                <th scope="col">Rera Id</th>
                <th scope="col">Property Area</th>
                <th scope="col">Bedrooms</th>
                <th scope="col">Bathrooms</th>
                <th scope="col">Posted On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Seller Type">
                  {data.sellerType || <p>not given</p>}
                </td>
                <td data-label="Rera Id">{data.reraId || <p>not given</p>}</td>
                <td data-label="Bedrooms">
                  {data.bedroom || <p>not giver</p>}
                </td>
                <td data-label="Bathrooms">
                  {data.bathroom || <p>not given</p>}
                </td>
                <td data-label="Rent Price">
                  {data.rentPrice || <p>not given</p>}
                </td>
                <td data-label="Posted On">
                  {data.postedOn || <p>not given</p>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* details table in mobile view ends */}
      </section>
    </>
  );
};

export default Details;
