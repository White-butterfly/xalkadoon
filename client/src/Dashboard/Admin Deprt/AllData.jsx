import React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Moment from "react-moment";

const AllData = () => {
	const [Region, setRegion] = useState([]);
	useEffect(() => {
		axios
		  .get(`http://localhost:7000/api/region`)
		  .then((res) => setRegion(res.data.data));
	      });

  return (
 <div>
      <div id="content">
        <main>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3> Xalkadoon </h3>
                <i className="">
                  {/* <ReactHTMLTableToExcel
                    className="ne-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-700 hover:bg-green-600 focus:outline-none rounded mr-70 text-white"
                    table="asset-table"
                    filename="AllAssets"
                    sheet="Sheet"
                    buttonText="Export to Excel"
                  /> */}
                </i>
              </div>
              <table id="asset-table">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>region</th>
                    <th>rainfallAmount</th>
                    <th> probability</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {Region.map((region, id) => (
                    <tr>
                      <td>{id + 1}</td>
                      <td>{region.region}</td>
                      <td>{region.rainfallAmount}mm</td>
                      <td>{region.probability}</td>
                      
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AllData