import React, { useState, useEffect } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'


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
        const dataInfo = async () => {
            const res = await axios(`${process.env.REACT_APP_AXIOS_API_PHP}?action=featured`);
            //console.log(res.data);
            setDataInfo(res.data);
        };
        dataInfo();
    }, []);
    return (

        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div className="col-md-6 px-0">
                {dataInfo.map((data) => {
                    const link = "/blogtitle/" + data.title
                    return (
                        <React.Fragment key={data.id}>
                            <h1 className="display-4 fst-italic">{data.title}</h1>
                            <p className="lead my-3" style={textStyle}>{parse(data.post)}</p>
                            <p className="lead mb-0"><a href={link} className="text-white fw-bold">Continue reading...</a></p>
                        </React.Fragment>
                    )
                })}

            </div>
        </div>

    )
}

export default MainBanner
