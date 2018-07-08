import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class SelectedDish extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectedDish = this.props.selectedDish;
        const comments = selectedDish.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {comment.date}</p>
                </div>
            );
        });
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                            <CardBody>
                                <CardTitle>{selectedDish.name}</CardTitle>
                                <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                                <h3>Comments</h3>
                            {comments}
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedDish;