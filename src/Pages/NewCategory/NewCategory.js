import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';
import CryptoJS from 'crypto-js'
import secureLocalStorage from "react-secure-storage";
const NewCategory = () => {
    
  const UserRole = secureLocalStorage.getItem('UserRole')
  if (UserRole) {
    var decryptedToken = CryptoJS.AES.decrypt(UserRole, 'Secret Pharase');
    var role = decryptedToken.toString(CryptoJS.enc.Utf8);
  }

    const [infoStatus, setInfoStatus] = useState([]);
    const postData = () => {
        
        var category = document.getElementById('nameofcategory').value;
        console.log(category);
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'add');
        data.append('cat', category);
        data.append('status', 'Approved');
    
        let config = {

            method: 'post',
            url: 'http://localhost/addnewcategory.php',
            headers: data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' }
            ,
            data: data
        };

        axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
                console.log(error);
            }).then(() => {
                alert('new category added')
                window.location.reload();
            })
    }

    useEffect(() => {
        const menuData = async () => {
          const res = await axios('http://localhost/menucategories.php?action=menu');
          setInfoStatus(res.data);
        };
        menuData();
      }, []);

    return (
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Add New Category
                </h2>
            </div>
            <div style={{ width: '100%' }}>
                <label htmlFor="nameofcategory" class="form-label">Write Name of Category</label>
                <input type="text" class="form-control" id="nameofcategory"/>
                <br />
                <button type='submit' class="btn btn-success" onClick={postData}>Add Category</button>
            </div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Category DATA
                </h2>
            </div>
            <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infoStatus.map((data, index) => {
                        
                        return <>
                          <tr>
                            <td index={index}>{index + 1}</td>
                            <td >{data.category}</td>
                            <td>{data.status}</td>
                            <td>{role === 'Admin' ? <><button className="btn btn-primary">Edit</button>
                              <button className="btn btn-danger">Delete</button>
                              </> : 
                              <><button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" >Delete</button></>}</td>
                          </tr>
                        </>
                      })}
                    </tbody>
                  </table>


        </main>
    )
}

export default NewCategory
