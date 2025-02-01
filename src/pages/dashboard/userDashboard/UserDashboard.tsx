import { Outlet } from "react-router-dom"

const UserDashboard = () => {
  return (
    <div>
         <main className="flex-1 p-6">
        <Outlet /> 
      </main>
    </div>
  )
}

export default UserDashboard