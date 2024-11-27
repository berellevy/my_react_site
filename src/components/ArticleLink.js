import React from 'react'
import {Card, CardBody, CardTitle, CardLink, CardText} from 'react-bootstrap'
export const ArticleLink = ({title, snippet, link, pubDate}) => {
  return (
    <Card style={{background: "light"}}>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{snippet}</CardText>
        <CardText>{new Date(pubDate).toLocaleDateString()}</CardText>
        <CardLink target='_blank' href={link}>Read More...</CardLink>
      </CardBody>
    </Card>
  )
}
