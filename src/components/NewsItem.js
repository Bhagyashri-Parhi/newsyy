// import React, { Component } from 'react'
import React from 'react'

// export class NewsItem extends Component {
const NewsItem = (props)=>{
    // render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        // this.props; was used in class based components as part of destructuring
        return (
            <div>
                <div className="card my-3">
                <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>

                    <span class="badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>

                </div>
            </div>
        )
    // }
}

export default NewsItem
