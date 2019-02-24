import React from 'react';

function Book(props) {
    console.log(props)
    return (
    <div className="container mt-3">
        <div className="row justify-content-center">
            <img src={props.imgUrl} alt="" className="img-fluid d-inline" />
                <div className="description d-inline-block align-center w-50">
                    <h5>{props.title}</h5>
                    {props.authors.map((author) => 
                        <h6>{author}</h6>
                    )}
                    <p className="mt-5">{props.publisher}</p>
                    {/*<p>{ props.searchInfo.textSnippet }</p>*/}
                </div>
        </div>
            <hr className="mb-3"/>
    </div>
    )
}

export default Book;