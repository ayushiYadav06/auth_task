import React, { useEffect } from "react";

function Dashboard() {
  const DashboardValidate = async () => {
    let token = localStorage.getItem("usersDataToken");

    const res = await fetch("http://localhost:8006/validUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });

    const data = await res.json();
        
    if(data.status === 500 || !data)
    {
      console.log("error")
    }else{
      console.log("user verify")
    }
  };

  useEffect(() => {
    DashboardValidate();
  }, []);
  return (
    <div>
      <h1> welcome to Dashboard</h1>
    </div>
  );
}

export default Dashboard;
