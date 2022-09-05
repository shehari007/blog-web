import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const MainCards = () => {
  const textStyle = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  const textStyleHead = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  const [dataInfo, setDataInfo] = useState([]);
  useEffect(() => {
    const dataInfo = async () => {
      const res = await axios('http://localhost/blog.php?action=randomCards');
      //console.log(res.data);
      setDataInfo(res.data);
    };
    dataInfo();
  }, []);

  return (
    <><div className="row mb-2">
      {dataInfo.map((data) => {
        const link = "/blogtitle/" + data.title
        return <>
          <React.Fragment key={data.id}>

            <div className="col-md-6" >
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">

                  <strong className="d-inline-block mb-2 text-primary">{data.category}</strong>
                  <h3 className="mb-0" style={textStyleHead}>{data.title}</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto" style={textStyle}>{data.post}</p>
                  <a href={link} >Continue reading</a>

                </div>

                <div className="col-auto d-none d-lg-block">
                  <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                </div>
              </div>
            </div>
          </React.Fragment>
        </>
      })}
    </div></>

  )
}

export default MainCards
