import React from 'react';

function Book(props) {
    console.log(props)
    return (
    <div className="container mt-3">
        <div className="row justify-content-center">
        { props.imgUrl ? (
            <div>
                <img src={props.imgUrl.thumbnail} alt="" className="img-fluid d-inline" />
            </div>
        ) : (
            <p>No image available</p>
        )}
            
                <div className="description d-inline-block align-center w-50">
                    <h5>{props.title}</h5>
                    { props.authors ? (
                        <div>
                            {props.authors.map((author) =>
                                <h6>{author}</h6>
                            )}
                        </div>
                    ) : (
                        <h6>No Authors listed</h6>
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