import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const fetchURL = "https://fakestoreapi.com/products";
function Charts(props) {
  const [presentData, setPresentData] = useState([]);

  // Fetch Data From th External Source
    async function fetchData() {
      const getData = await fetch(fetchURL);
      const changeData = await getData.json();
      setPresentData(changeData.slice(0,9));
    };
    
    useEffect(() => {
        fetchData();
    }, []);
// Fetch Data From th External Source

  return (
      <>
          <section className="charts container-fluid py-5">
                    <div className="row ">
                        <div className="col-lg-6">
                            {/* Pie chart section starts. */}
                                <PieChart width={250} height={250}>
                                    <Pie
                                        dataKey="price"
                                        isAnimationActive={false}
                                        data={presentData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#82ca9d"
                                        label
                                    />
                                </PieChart>
                            {/* Pie chart section ends. */}
                        </div>
                        <div className="col-lg-6">
                            {/* Line chart section starts. */}
                                <LineChart
                                width={400}
                                height={300}
                                data={presentData}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="title" />
                                <YAxis />
                                <Legend />
                                <Line type="monotone" dataKey="price" stroke="#fff" activeDot={{ r: 8 }} />
                                </LineChart>
                            {/* Line chart section ends. */}
                        </div>
                    </div>
                </section>
      </>
  )
}

export default Charts;



