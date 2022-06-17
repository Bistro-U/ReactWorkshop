import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  // renderDishes({ dish }) {
  //   return (
  //     <div className="col-12 col-sm-5">
  //       <Card>
  //         <CardImg top src={dish.image} alt={dish.name} />
  //         <CardBody>
  //           <CardTitle>{dish.name}</CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     </div>
  //   );
  // }

  // renderComments({ comments }) {
  //   const comment = comments.map((item) => {
  //     return (
  //       <div>
  //         <p>{item.comment}</p>
  //         <p>
  //           -- {item.author} {item.date}
  //         </p>
  //       </div>
  //     );
  //   });
  //   return (
  //     <div className="col-12 col-sm-7">
  //       <h2>Comments</h2>
  //       {comment}
  //     </div>
  //   );
  // }

  render() {
    if (this.props.dish != null) {
      const comment = this.props.dish.comments.map((item) => {
        return (
          <div>
            <p>{item.comment}</p>
            <p>
              -- {item.author} {item.date}
            </p>
          </div>
        );
      });
      const dish = this.props.dish;
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5">
              <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-sm-7">
              <h2>Comments</h2>
              {comment}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
