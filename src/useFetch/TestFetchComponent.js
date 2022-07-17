import React, { Component } from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Form, FormGroup, Input, Label } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

export function RenderComments({ comments }) {
    const comment = comments.map((item) => {
        return (
            <div>
                <h6>{"id" + item.id + " - rating" + item.rating}</h6>
                <p>{item.comment}</p>
                <p>{item.author} {item.date}</p>
            </div>
        )
    })
    return (
        <div className='col-12 col-sm-7'>
            <h2>comments</h2>
            {comment}
        </div>
    );
}

class TestFetchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [],
            comments: [],
            id: -1,
            dishID: -1,
            rating: 1,
            comment: "",
            author: "",
            date: new Date()
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.fetchDishes();
        this.fetchComments();
    }
    handleInputChange(event) {
        const nameControl = event.target.name;
        const value = event.target.value;
        this.setState({ [nameControl]: value });
    }

    handleSubmit(dish) {
        const newComment = {
            id: this.state.comments.length,
            dishId: dish.id,
            rating: this.state.rating,
            comment: this.state.comment,
            author: this.state.author,
            date: this.state.date.toString()
        }
        console.log(newComment);
        this.addComment(newComment);
    }
    addComment(newComment) {
        return fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    this.setState({ comments: this.state.concat(newComment) });
                }
            });
    }
    fetchDishes() {
        return fetch(baseUrl + 'dishes')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dishes: data
                });
            })
    }
    fetchComments() {
        return fetch(baseUrl + 'comments')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    comments: data
                });
            })
    }
    render() {
        const content = this.state.dishes.map((dish) => {
            return (
                <div className='col-12 col-sm-8' key={dish.id}>
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <h4>comments</h4>
                    <RenderComments comments={this.state.comments.filter(comment => comment.dishId === parseInt(dish.id, 10))} />
                    <Form>
                        <FormGroup>
                            <Label for="author"> author: </Label>
                            <Input
                                type='text'
                                id='author'
                                name='author'
                                placeholder='author'
                                value={this.state.author}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="comment"> comment: </Label>
                            <Input
                                type='text'
                                id='comment'
                                name='comment'
                                placeholder='comment'
                                value={this.state.comment}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="rating"> rating: </Label>
                            <Input
                                type='text'
                                id='rating'
                                name='rating'
                                placeholder='rating'
                                min="1"
                                max="5"
                                value={this.state.rating}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.handleSubmit.bind(this, dish)}>Submit</Button>
                        </FormGroup>
                    </Form>
                </div>

            )
        });
        return (
            <div className="col-12 col-sm-5">
                {content}
            </div >
        );
    }
}

export default TestFetchComponent;