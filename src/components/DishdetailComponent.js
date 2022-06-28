import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


export function RenderDishes({ dish }) {
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

export function RenderComments({ comments }) {
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

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dish != null) {
      const dish = this.props.dish;
      const comments = this.props.comments;
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{dish.name}</h3>
              <hr />
            </div>
            {/* <RenderDishes dish={props.dish} />
            <RenderComments comments={props.dish.comments} /> */}
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDishes dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={comments} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}


// const DishDetail = (props) => {
//   if (props.dish != null) {
//     return (
//       <div className="container">
//         <div className="row">
//           <RenderDishes dish={props.dish} />
//           <RenderComments comments={props.dish.comments} />
//         </div>
//       </div>
//     );
//   } else {
//     return <div></div>;
//   }
// }



export default DishDetail;