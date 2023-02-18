import { Bar, Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Regions = () => {
	const [Regions, setRegions] = useState([]);
	const [drugWells1, setdrugWells1] = useState([]);
	const [drugWells2, setdrugWells2] = useState([]);
	const [drugWells3, setdrugWells3] = useState([]);
	const [Berkads1, setBerkads1] = useState([]);
	const [Berkads2, setBerkads2] = useState([]);
	const [Berkads3, setBerkads3] = useState([]);

	const [Dam1, setDam1] = useState([]);
	const [Dam2, setDam2] = useState([]);
	const [Dam3, setDam3] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:7000/api/admin`).then((res) => {
		  setRegions(res.data.siciid);
		  setdrugWells1(res.data.drugWells1);
		  setdrugWells2(res.data.drugWells2); 
		  setdrugWells3(res.data.drugWells3);

		  setBerkads1(res.data.Berkads1);
		  setBerkads2(res.data.Berkads2);
		  setBerkads3(res.data.Berkads3);
		  setDam1(res.data.Dam1);
		  setDam2(res.data.Dam2);
		  setDam3(res.data.Dam3);
	


		  console.log("regions are ", res.data.Berkads1, );
		});
		
	    
		
	      }, []);
  return (
    <div>
	 <div>
      {" "}
      <div id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Regions Section </h1>
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-calendar"></i>
              <span className="text">16-Feb-2023</span>
            </a>
          </div>

          <ul className="box-info m-4 mx-5">
            <Link to="/AllCallcenter">
              <li>
                <i className="bx bxs-calendar-check"></i>
                <span className="text">
                  <h3>{drugWells1.length}</h3> 
                  <p>DrugWells that are less than average</p>
                </span>
              </li>
              <p className="m-10">Drug Wells Data </p>
            </Link>

            <Link to="/EmployeeCenter">
              <li>
                <i className="bx bxs-calendar-check"></i>
                <span className="text">
                  <h3>{drugWells2.length}</h3>
                  <p>DrugWells that are average</p>

                </span>
              </li>
            </Link>
	



	    <Link to="/AllCallcenter">
              <li>
                <i className="bx bxs-calendar-check"></i>
                <span className="text">
                  <h3>{drugWells3.length}</h3> 
                  <p>DrugWells that are enough </p>
                </span>
              </li>
	      </Link>



          </ul>
          <div className="flex m-7">
            <div>
              <Bar
                className="bg-gray-50 w-[40rem] h-72 ml-36  rounded p-3 mb-5 "
                data={{
                  labels: [
                    "less than 4",
                    "between 4 and 10",
                    "More than 10",
                  ],
                  datasets: [
                    {
                      label: "DrugWells",
                      data: [
                        drugWells1.length,
			drugWells2.length,
			drugWells3.length,
			
                      ],
                      backgroundColor: ["blue", "orange", "purple", ],
                    },
                  ],
                }}
              />
            </div>
            <div></div>
          </div>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Regions