import React from 'react';

function Book(props) {
    console.log(props)
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                {props.imgUrl ? (
                    <div>
                        <img className="img-fluid" src={props.imgUrl.thumbnail} alt=""/>
                    </div>
                ) : (
                        <p>No image available</p>
                    )}
                    <div className="card text-left border-0 ml-5" style={{width: '25rem'}}>
                        <div className="card-body p-0">
                            <h5 className="card-title">{props.title}</h5>
                                {props.authors ? (
                                    <div>
                                        {props.authors.map((author) =>
                                            <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                                        )}
                                    </div>
                                ) : (
                                        <h6>No Authors listed</h6>
                                    )}
                            <p className="card-text">{props.publisher}</p>
                                <a id="seymour" href={props.info} className="card-link btn btn-warning position-relative" role="button">See More</a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Book;