import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-7xl font-bold text-center items-center">Page Not Found!!</h1>
            <Link className="btn px-20 py-4 text-center" t0={'/'}>Back To Home</Link>
        </div>
    );
};

export default ErrorPage;