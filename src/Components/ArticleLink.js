import React from 'react'
import {Card, CardBody, CardTitle, CardLink, CardText} from 'react-bootstrap'
export const ArticleLink = ({title, snippet, href, pubDate}) => {
  return (
    <Card style={{background: "light"}}>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{snippet}</CardText>
        <CardText>{new Date(pubDate).toLocaleDateString()}</CardText>
        <CardLink href={href}>Read More...</CardLink>
      </CardBody>
    </Card>
  )
}
