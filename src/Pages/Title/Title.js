import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import parse from 'html-react-parser'

const Title = () => {

    const params = useParams()
    const ItemId = params.title
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios(`http://localhost/alltitle.php?title=${ItemId}`);

            setInfo(res.data);
        };
        getUsers();
    }, []);
    
    return (
        <div className="container" style={{ marginTop: '2%' }}>
            <div className="row g-5">
                <div className="col-md-8">
                    {info.map((data) => {
                        var link = "/userposts/"+ data.name
                        return <>
                            <h3 className="pb-4 mb-4 fst-italic border-bottom">
                                From the {data.category}!
                            </h3>
                            <article className="blog-post">
                                <h2 className="blog-post-title mb-1">{data.title}</h2>
                                <p className="blog-post-meta">January 1, 2021 by <a href={link}>{data.name}</a></p>
                                <p style={{ whiteSpace: 'pre-line' }}>{parse(data.post)}</p>
                            </article>
                        </>
                    })}
                    

                </div>
                <div className="col-md-4">
                    <div className="position-sticky" style={{ top: '2rem' }}>
                        <div className="p-4 mb-3 bg-light rounded">
                            <h4 className="fst-italic">About</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                        </div>
                        <div className="p-4">
                            <h4 className="fst-italic">Archives</h4>
                            <ol className="list-unstyled mb-0">
                                <li><a href="localhost:3000">March 2021</a></li>
                                <li><a href="localhost:3000">February 2021</a></li>
                                <li><a href="localhost:3000">January 2021</a></li>
                                <li><a href="localhost:3000">December 2020</a></li>
                                <li><a href="localhost:3000">November 2020</a></li>
                                <li><a href="localhost:3000">October 2020</a></li>
                                <li><a href="localhost:3000">September 2020</a></li>
                                <li><a href="localhost:3000">August 2020</a></li>
                                <li><a href="localhost:3000">July 2020</a></li>
                                <li><a href="localhost:3000">June 2020</a></li>
                                <li><a href="localhost:3000">May 2020</a></li>
                                <li><a href="localhost:3000">April 2020</a></li>
                            </ol>
                        </div>
                        <div className="p-4">
                            <h4 className="fst-italic">Elsewhere</h4>
                            <ol className="list-unstyled">
                                <li><a href="localhost:3000">GitHub</a></li>
                                <li><a href="localhost:3000">Twitter</a></li>
                                <li><a href="localhost:3000">Facebook</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}


export default Title
