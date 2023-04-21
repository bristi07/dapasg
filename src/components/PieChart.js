import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { json } from "react-router-dom";
import { FaFileExcel } from "react-icons/fa";
ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
    const [category, setCategory] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        const getcategory = [];
        const getcount = [];
        const fakestore = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            // console.log(response);
            const jsonData = await response.json();
            console.log(jsonData);
            const map1 = new Map();

            jsonData.map((value) => {
                // map1.set(value.category,  0);

                if (typeof map1.get(value.category) === "undefined") {
                    map1.set(value.category, 1);
                } else {
                    map1.set(value.category, map1.get(value.category) + 1);
                }
            });

            //console.log("done");

            console.log(map1);

            for (let [key, value] of map1.entries()) {
                getcategory.push(key);


                getcount.push(value);

                console.log(getcount);
            }
            setCategory(getcategory);
            setCount(getcount);
        };
        fakestore();
    }, []);


    return (
        <div className="">
            <div className="flex">
                <div className="col mb-3 mt-3 m-20 ">

                    <Pie

                        height={300}
                        data={{
                            labels: category,
                            datasets: [
                                {
                                    label: "No of Products",
                                    data: count,
                                    backgroundColor: [
                                        "rgba(38, 159, 159, 0.85)",
                                        "rgba(54, 162, 235, 0.2)",
                                        "rgba(221, 42, 255, 0.28)",
                                        "rgba(0, 0, 150, 1)",
                                        "rgba(153, 102, 255, 0.2)",
                                        "rgba(2, 42, 255, 0.28)",
                                    ],
                                    borderColor: [
                                        "rgba(38, 159, 159, 0.85)",
                                        "rgba(54, 162, 235, 0.2)",
                                        "rgba(221, 42, 255, 0.28)",
                                        "rgba(0, 0, 150, 1)",
                                        "rgba(153, 102, 255, 0.2)",
                                        "rgba(2, 42, 255, 0.28)",
                                    ],
                                    borderWidth: 1,
                                    offset: [0, 0, 0, 0],
                                },
                            ],
                        }}
                        // options={{

                        // responsive: true,

                        // }}
                        options={{
                            responsive: false,
                            plugins: {
                                title: {
                                    fontSize: 15,
                                    text: "Chart js tutorial",
                                    display: true,
                                    font: { size: 30 },
                                },
                                legend: {
                                    labels: {
                                        font: { size: 10 },


                                    },
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Piechart;
