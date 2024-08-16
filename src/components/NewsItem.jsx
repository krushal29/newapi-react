import { Component } from "react";

export class NewsItem extends Component {

    


  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={!imageUrl?"https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/best_value_used_cars-ford-puma_0.jpg":imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
