import React, { useEffect, useState } from "react";
import Foot from "../components/header/Foot";
import Head from "../components/header/Head";
import SideMenu from "../components/header/SideMenu";
import axios from "axios";

export default function Events() {
  const url = "assets/events.json";
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://35.183.149.69:5000/Event`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData[0].eventOrder);
        setData(actualData[0].eventOrder);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="back-border viewport">
      <div class="scroll-containers">
        <Head></Head>
        <div class="dashboard">
          <SideMenu />
          <div class="data-part">
            <section id="section" class="grid-list p-555">
              <div class="grid-list-sec">
                <div class="m-3 d-flex flex-column justify-content-center align-items-center">
                  <div class="w-100 d-flex justify-content-between mt-3">
                    <div>
                      <select>
                        <option class="fs-3" value="1">
                          Test Event
                        </option>
                      </select>
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Name
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Age
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Height
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Weight
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Color
                        </a>
                      </li>
                    </ul>
                    <select>
                      <option value="null">Select a class</option>
                      <option>
                        <a class="dropdown-item" href="#">
                          OPEN REINING
                        </a>
                      </option>
                      <option>
                        <a class="dropdown-item" href="#">
                          LEVEL I WESTERN HORSEMANSHIP
                        </a>
                      </option>
                      <option>
                        <a class="dropdown-item" href="#">
                          LEVEL II RANCH RIDING
                        </a>
                      </option>
                      <option>
                        <a class="dropdown-item" href="#">
                          OPEN WESTERN HORSEMANSHIP
                        </a>
                      </option>
                      <option>
                        <a class="dropdown-item" href="#">
                          LEVEL II WESTERN HORSEMANSHIP
                        </a>
                      </option>
                      <option>
                        <a class="dropdown-item" href="#">
                          ROOKIE B WESTERN HORSEMANSHIP
                        </a>
                      </option>
                      <option>
                        <a class="dropdown-item" href="#">
                          BEGINNER WESTERN HORSEMANSHIP
                        </a>
                      </option>
                      <option>
                        <a class="dropdown-item" href="#">
                          ROOKIE A WESTERN HORSEMANSHIP
                        </a>
                      </option>
                    </select>
                  </div>
                </div>
                <div class="backgroundColor">
                  <div class="m-3 d-flex flex-column justify-content-center align-items-center">
                    {data.map((item, index) => (
                      <table
                        class="table table-striped w-100 border border-primary"
                        key={index}
                      >
                        <thead class="table-dark">
                          <tr>
                            <th scope="col" colSpan="7">
                              {item.showClass} - {item.section}
                            </th>
                          </tr>
                          <tr>
                            <th scope="col" class="bg-white text-dark">
                              Placing
                            </th>
                            <th scope="col" class="bg-white text-dark">
                              Order
                            </th>
                            <th scope="col" class="bg-white text-dark">
                              Rider id
                            </th>
                            <th scope="col" class="bg-white text-dark">
                              Rider name
                            </th>
                            <th scope="col" class="bg-white text-dark">
                              Rider school
                            </th>
                            <th scope="col" class="bg-white text-dark">
                              Horse name
                            </th>
                            <th scope="col" class="bg-white text-dark">
                              Horse Provider
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.pairs.map((col, index) => (
                            <tr key={index}>
                              <td>-</td>
                              <td>{col.order}</td>
                              <td>{col.riderId}</td>
                              <td>{col.riderName}</td>
                              <td>{col.riderSchool}</td>
                              <td>{col.horseName}</td>
                              <td>{col.horseProvider}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Foot />
        </div>
      </div>
    </div>
  );
}
