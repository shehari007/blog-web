import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import secureLocalStorage from 'react-secure-storage';

const role = secureLocalStorage.getItem('setRole')
  const Username = secureLocalStorage.getItem('UserDetail')

  if (role) {
    var decryptedToken = CryptoJS.AES.decrypt(role, 'Secret Pharase');
    var UserRole = decryptedToken.toString(CryptoJS.enc.Utf8);
    var decryptedUserDetails = CryptoJS.AES.decrypt(Username, 'Secret Pharase');
    var username = decryptedUserDetails.toString(CryptoJS.enc.Utf8);
  }
   //console.log(username)

export default class Upload extends React.Component {
    
    state = {
        selectedFile: null
    }
    fileSelect = event => {
        this.setState({ selectedFile: event.target.files[0] })
        //console.log(event.target.files[0])
        
    }

    fileUpload = () => {
        const FormData = require('form-data');
        let data = new FormData();
        data.append('action', 'uploadPicture');
        data.append('image', this.state.selectedFile, this.state.selectedFile.name);
        data.append('name', username);
        let config = {

            method: 'post',
            baseURL: `${process.env.REACT_APP_AXIOS_API_PHP}`,
            withCredentials: false,
            data: data
        };

        axios(config).then(function (response) {
            //console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
                console.log(error);
            }).then(() => {
                alert('photo uploaded successfully')
                window.location.reload();
            })
    }

    render() {
        return (
            <div style={{justifyContent: 'center'}}>
                <input type="file" onChange={this.fileSelect} style={{display: 'none'}} />
                <button className="btn btn-primary"onClick={this.fileUpload}>Upload</button>
            </div>
        );
    }
}
