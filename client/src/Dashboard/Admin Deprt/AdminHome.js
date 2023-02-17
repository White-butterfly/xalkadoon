import React from 'react'
import { Bar, Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const AdminHome = () => {
	const [Asset, setAsset] = useState([]);
	const [EmployeeAsset, setEmployeeAsset] = useState([]);

	// useEffect(() => {
	// 	axios.get(`http://localhost:1000/api/Asset`).then((res) => {
	// 	  setAsset(res.data.data);
	// 	});
	// 	axios.get(`http://localhost:1000/api/HR`).then((res) => {
	// 	  setEmployeeAsset(res.data.dept);
	// 	});
	//       });

  return (
	<>
	<div id="content">
	  <main>
	    <div className="head-title">
	      <div className="left">
		<h1>Admin Department </h1>
	      </div>
	      <a href="#" className="btn-download">
		<i className="bx bxs-calendar"></i>
		<span className="text">23-Feb-2023</span>
	      </a>
	    </div>
  
	    <ul className="box-info m-4 mx-10">
	      <Link to="/AllAssets">
		<li>
		  <i className="bx bxs-dollar-circle"></i>
		  <span className="text">
		    <h3>{Asset.length}</h3>
		    <p>Asset Data</p>
		  </span>
		</li>
	      </Link>
	      <Link to="/EmployeeAsset">
		<li>
		  <i className="bx bxs-calendar-check"></i>
		  <span className="text">
		    <h3>{EmployeeAsset.length}</h3>
		    <p>Employee Asset</p>
		  </span>
		</li>
	      </Link>
	    </ul>
	    <div className="flex mx-7 ">
	      <div>
		<Bar
		  className="bg-gray-50 w-82 h-72 ml-52 rounded p-3 mb-5 "
		  data={{
		    labels: Asset.map((x) => x.qalabka),
		    datasets: [
		      {
			data: 'hello',
			backgroundColor: ["green", "grey"],
		      },
		    ],
		  }}
		/>
	      </div>
	    </div>
	  </main>
	</div>
      </>
  )
}

export default AdminHome