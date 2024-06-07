import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./assets/Components/Users";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/");
        setUserData(response.data);
        setLoading(false);  
      } catch (err) {
        setError(true);
        setLoading(false);  
      }
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <h1>No Data Found!</h1>;
  }

  return (
  <Users userData={userData} />
  );
}

export default App;
