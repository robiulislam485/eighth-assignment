import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Statistic = () => {
    const data = useLoaderData();
    const {product_title,price } = data[0];
    console.log(price);
    return (
       <div className="my-20">
        
       <div className="max-w-7xl mx-auto ml-96">
       <BarChart width={600} height={400} data={data}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey='product_title'></XAxis>
          <YAxis dataKey='price'></YAxis>
        </BarChart>
       </div>


       </div>
    );
};

export default Statistic;



