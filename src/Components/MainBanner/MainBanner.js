import React, { useState, useEffect } from 'react'
import axios from 'axios'


const MainBanner = () => {
    const textStyle = {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 4,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };
    const [dataInfo, setDataInfo] = useState([]);
    useEffect(() => {
        const dataInfo  = async () => {
          const res = await axios('http://localhost/featuredpost.php?action=featured');
          //console.log(res.data);
          setDataInfo(res.data);
        };
        dataInfo();
    }, []);
    return (

        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div className="col-md-6 px-0">
                {dataInfo.map((data) => {
                    return (
                    <React.Fragment key={data.id}>
                    <h1 className="display-4 fst-italic">{data.title}</h1>
                    <p className="lead my-3"style={textStyle}>{data.post}</p>
                    <p className="lead mb-0"><a href="localhost:3000" className="text-white fw-bold">Continue reading...</a></p>
                    </React.Fragment>
                    )
                })}

            </div>
        </div>

    )
}

export default MainBanner
