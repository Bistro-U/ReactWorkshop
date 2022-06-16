import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends React.Component {

  renderDishes({ dish }) {
    return (
      <div className="col-12 col-sm-5">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments({ comments }) {
    const comment = comments.map((item) => {
      return (
        <div>
          <p>{item.comment}</p>
          <p>
            -- {item.author} {item.date}
          </p>
        </div>
      );
    });
    return (
      <div className="col-12 col-sm-7">
        <h2>Comments</h2>
        {comment}
      </div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <this.renderDishes dish={this.props.dish} />
            <this.renderComments comments={this.props.dish.comments} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
