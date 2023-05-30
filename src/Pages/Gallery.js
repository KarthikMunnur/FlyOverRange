import React, { useEffect, useState } from "react";
import Foot from "../components/header/Foot";
import Head from "../components/header/Head";
import SideMenu from "../components/header/SideMenu";
import axios from "axios";

export default function Gallery() {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [dataList, setDataList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);

    const peticionGet = async () => {
        try {
          axios.get(url).then((res) => {
            setDataList(res.data.results);
            console.log(dataList)
          });
        } catch (e) {
          console.log(e.message);
        }
      };
    
      useEffect(() => {
        peticionGet();
      }, []);
    
      const handleChange = (value) => {
        setSearchText(value);
        filterData(value);
      };
      // filter records by search text
      const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
    
        if (lowercasedValue === "") {
            setDataList(dataList);
        } else {
          const filteredData = dataList.filter((item) => {
           
            return Object.keys(item).some((key) =>
              item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setDataList(filteredData);
          console.log(filteredData)
        }
      };

  return (
    <div class="back-border viewport">
      <div class="scroll-containers">
        <Head></Head>
        <div class="dashboard">
          <SideMenu />
          <div class="data-part">
            <section id="section" class="grid-list p-555">
              <div class="dropdown">
              <input
                    style={{ marginLeft: 5 }}
                    type="text"
                    placeholder="Type to search..."
                    value={searchText}
                    onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <div class="grid-list-sec">
                <ul class="gallery">
                {dataList.map((row, i) => {
                     console.log("rowwww" +  row.name);
                    return (
                        <li key={i}>
                            <img src="assets/profile.png"/>
                        {row.name}
                      </li>
                    );
                    })}
                  
                </ul>
                {dataList.length === 0 && <div className="error">No records found to display!</div>}
              </div>
            </section>
          </div>
          <Foot />
        </div>
      </div>
    </div>
  );
}
