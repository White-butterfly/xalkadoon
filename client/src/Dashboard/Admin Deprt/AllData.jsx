import React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Moment from "react-moment";

const AllData = () => {
	const [Asset, setAsset] = useState([]);
	// useEffect(() => {
	// 	axios
	// 	  .get(`http://localhost:1000/api/Asset`)
	// 	  .then((res) => setAsset(res.data.data));
	//       });

  return (
 <div>
      <div id="content">
        <main>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Asset System</h3>
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
                    <th>Qalabka</th>
                    <th>Tirada</th>
                    <th>Sumada</th>
                    <th>Gaadhiga</th>
                    <th>Taariikh</th>
                  </tr>
                </thead>
                <tbody>
                  {Asset.map((asset, id) => (
                    <tr>
                      <td>{id + 1}</td>
                      <td>asset.qalabka</td>
                      <td>asset.tirada</td>
                      <td>asset.sumada</td>
                      <td>asset.gaadhiga</td>
                      <td>
                        <Moment format="Do MMM YYYY">date</Moment>
                      </td>
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