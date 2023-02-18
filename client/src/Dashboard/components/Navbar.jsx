import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/";
  }

  function dark() {
    const switchMode = document.getElementById("switch-mode");

    switchMode.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });
  }

  function menu() {
    const allSideMenu = document.querySelectorAll(
      "#sidebar .side-menu.top li a"
    );

    allSideMenu.forEach((item) => {
      const li = item.parentElement;

      item.addEventListener("click", function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
    });

    const menuBar = document.querySelector("#content nav .bx.bx-menu");
    const sidebar = document.getElementById("sidebar");

    menuBar.addEventListener("click", function () {
      sidebar.classList.toggle("hide");
    });

    const searchButton = document.querySelector(
      "#content nav form .form-input button"
    );
    const searchButtonIcon = document.querySelector(
      "#content nav form .form-input button .bx"
    );
    const searchForm = document.querySelector("#content nav form");

    searchButton.addEventListener("click", function (e) {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle("show");
        if (searchForm.classList.contains("show")) {
          searchButtonIcon.classList.replace("bx-search", "bx-x");
        } else {
          searchButtonIcon.classList.replace("bx-x", "bx-search");
        }
      }
    });

    if (window.innerWidth < 768) {
      sidebar.classList.add("hide");
    } else if (window.innerWidth > 576) {
      searchButtonIcon.classList.replace("bx-x", "bx-search");
      searchForm.classList.remove("show");
    }

    window.addEventListener("resize", function () {
      if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace("bx-x", "bx-search");
        searchForm.classList.remove("show");
      }
    });
  }
  return (
    <>
      <div id="sidebar">
        <a href="#" className="brand">
          <img
            src="https://th.bing.com/th/id/OIP.29mXd1a5zBHVjYvTmUsLtwHaDs?w=312&h=174&c=7&r=0&o=5&pid=1.7"
            style={{ width: "90px", height: "80px", padding: "15px" }}
          />
          <span className="text">Xalkadoon Admin</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <Link to="/">
              <a href="#">
                <i className="bx bxs-dashboard"></i>
                <span className="text">Dashboard</span> 
              </a>
            </Link>
          </li>
          {/* <li> 
            <Link to="/AdminHome">
              <a href="">
                <i className="bx bxs-group"></i>
                <span className="text">Dashboard</span>
              </a>
            </Link>
          </li> */}
          <li>
            <Link to="/Regions">
              <a href="">
                <i className="bx bxs-message-dots"></i>
                <span className="text">Regions</span>
              </a>
            </Link>
          </li>
        
          <li>
            <Link to="/AdminHome">
              <a href="">
                <i className="bx bxs-shopping-bag-alt"></i>
                <span className="text">Donations</span>
              </a>
            </Link>
          </li>
         
     
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span onClick={() => logout()} className="text">
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div id="content">
        <nav>
          <i
            className="bx bx-menu"
            onClick={menu}
            style={{ fontSize: "33px" }}
          ></i>
          <a href="#" className="nav-link">
            Categories
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form>
          <Link to="/ForgotPassword">
            <i
              class="bx bxs-user "
              style={{ fontSize: "2rem", color: "green" }}
            ></i>
          </Link>
          {/* <input type="checkbox" id="switch-mode" hidden />
          <label
            for="switch-mode"
            onClick={dark} 
            className="switch-mode"
          ></label> */}

          {/* <a href="#" className="profile">
            <img src="img/people.png" />
          </a> */}
        </nav>
      </div>
    </>
  );
}

export default NavBar;