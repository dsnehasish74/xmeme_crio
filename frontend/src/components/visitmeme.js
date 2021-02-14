import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const VisitMeme = () => {
    const [memes, loadMemes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/memes")
            .then((response) => response.json())
            .then((data) => {
                var getmemes = data.map(meme => ({
                    id: meme._id,
                    name: meme.name,
                    caption: meme.caption,
                    url: meme.url
                }))

                loadMemes(getmemes);
            });
    }, [])

    return (
        <div className="container">
            {
                memes.map(meme => {
                    return (
                    <div key={meme.id} className="row p-3">
                        <div className="card col-12 col-lg-6 p-3">
                                <div className="card-body">
                                    <h5 className="card-title">{meme.name}</h5>
                                    <p className="card-text">{meme.caption}</p>
                                    <img className="card-img-top" src={meme.url} alt={meme.name}/>
                                    <Link to={"/updatememe/"+meme.id} className="btn btn-primary">Edit Meme</Link>
                                </div>
                        </div>
                    </div>
                    );
                })
            }
                        </div>
                    )
                }

export default VisitMeme;