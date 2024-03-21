import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteEmployee, listEmployee } from '../service/EmployeeService'

const ListEmployeeComponent = () => {
    // 變數型態 [state變數名稱, setState函式名稱] = useState(state變數初始值) 用陣列存[]
    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    // Employee Data List set
    useEffect(() => {
        getAllEmployee();
    },[])

    function getAllEmployee(){
        listEmployee().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee');
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployee();
        }).catch(error =>{
            console.error(error);
        })
    }

    // const dummyData = [
    //     {
    //         "id": 1,
    //         "firstName": "Pal",
    //         "lastName": "Daniel",
    //         "email": "a123456@gmail.com"
    //     },
    //     {
    //         "id": 2,
    //         "firstName": "Fa",
    //         "lastName": "Dante", 
    //         "email": "umes@gmail.com"
    //     },
    //     {
    //         "id": 3,
    //         "firstName": "Sente",
    //         "lastName": "Aape",
    //         "email": "umes111@gmail.com"
    //     }
    // ]

  return (
    <div className='container'>
        <br></br>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    //map
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent

