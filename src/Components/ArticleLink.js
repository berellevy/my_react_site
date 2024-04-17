import React from 'react'
import { Row, Col, Container, Image, Card, CardBody, CardTitle, CardLink, CardText} from 'react-bootstrap'
export const ArticleLink = ({title, text, href}) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <CardLink href={href}>Read More...</CardLink>
            </CardBody>
        </Card>
    )
}
