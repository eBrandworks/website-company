import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import React from "react";

const Post = ({ _id, author, title, summary, cover, updatedAt }) => {

    return (
        <React.StrictMode>
            <div className="col">
                <div className="card mb-3 shadow rounded border-0" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <Link to={`/blogs/post/${_id}`}>
                                <img className="img-fluid blog-imgs" src={'http://localhost:3001/' + cover} alt="..."
                                    style={{ objectFit: 'cover', objectPosition: 'center', height: '100%' }}
                                />
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body" style={{ textAlign: "left" }}>
                                <Link style={{
                                    textDecoration: "none"
                                }} to={`/blogs/post/${_id}`}>
                                    <h5 className="card-title fw-semibold">{title}</h5>
                                </Link>

                                <p className="card-text"
                                    style={{
                                        fontSize: "14px"
                                    }}
                                >
                                    <a className="me-2 fw-semibold disabled text-black text-decoration-none">{author.username}</a>
                                    <time>{formatISO9075(new Date(updatedAt))}</time>
                                </p>
                                <p className="card-text description">
                                    {summary}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Post;