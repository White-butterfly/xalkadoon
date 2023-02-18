import { Bar, Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import React from "react";

function Dashboard() {


  return (
    <>
      <div id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-calendar"></i>
              <span className="text">16-may-2023</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check"></i>
              <span className="text">
                <h3>6</h3>
                <p>Regions</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group"></i>
              <span className="text">
                <h3>4</h3>
                <p>Users</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-dollar-circle"></i>
              <span className="text">
                <h3>17</h3>
                <p>Donators</p>
              </span>
            </li>
          </ul>
          <div className="flex m-7">
            <div>
              <Bar
                className="bg-white w-82 h-72 "
                data={{
                  labels: [
                    "Sool",
                    "Awdal",
                    "Maroodijeex",
		    "Togdheer",
		    "Sanaag",
		    "Saaxil",
                  
                  ],
                  datasets: [
                    {
			// labels:  ["Rainfall"],
                      data: [600, 400, 200, 450, 300, 50, 120],
                      backgroundColor: ["blue", "grey"],
                    },
                  ],
                }}
              />
            </div>
            <div>
              <Pie
                className="bg-white w-58 h-42 ml-4"
                data={{
                  labels: ["Dams", "DrugWells", "Berkads"],
                  datasets: [
                    {
                      data: [8, 4, 10],
                      backgroundColor: ["blue", "grey","#88E181"],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;