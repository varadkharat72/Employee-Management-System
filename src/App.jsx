import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashoard from './components/Dashboard/AdminDashoard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      setLoggedInUserData(null)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  const handleLogout = (val) => {
    setUser(val)
    setLoggedInUserData(null)
    localStorage.setItem('loggedInUser', '')
  }

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' 
        ? <AdminDashoard data={loggedInUserData} changeUser={handleLogout} /> 
        : (user == 'employee' 
          ? <EmployeDashboard changeUser={handleLogout} data={loggedInUserData} /> 
          : null)
      }
    </div>
  )
}

export default App