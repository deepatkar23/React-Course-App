import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

    const Course=({course})=>{

        return(
            <Card className='text-center'>
                <CardBody>
                    <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
                    <CardText>{course.description}</CardText>
                    <Container className='text-center'>
                        <Button color='danger'>Delete</Button>
                        <Button color='warning m1-3'>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        );
    }

    export default Course;