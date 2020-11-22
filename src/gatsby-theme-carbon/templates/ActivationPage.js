import React from 'react';
import { useStaticQuery,graphql} from "gatsby";
import {ArticleCard,Row,Column} from "gatsby-theme-carbon";
import _ from 'lodash';

// Create a Helper Method
function getArticles(data) {

    console.log(data)

    if (_.isUndefined(data))
        return [];

    let articles = []

    // Outer loop to create parent
    data.forEach(function(article,index){

        console.log(article)

        const subtitle = article.subtitle ? article.subtitle : "";

        //Create the parent and add the children
        articles.push(

            <Column colMd={4} colLg={4} noGutterMdLeft>
                <ArticleCard
                    title={article.title}
                    author={article.author}
                    subTitle = {subtitle}
                    href={article.href}
                    color={article.color}
                    actionIcon="arrowRight"
                >
                </ArticleCard>
            </Column>
        );
    });

    return articles;

}

export default ({content}) => {

    const data = useStaticQuery(graphql`
    {
      allDataJson {
        nodes {
          cnd {
            title
            subtitle
            author
            href
            color
          }
          cndp {
            title
            subtitle
            author
            href
            color
          }
          gmd {
            title
            subtitle
            author
            href
            color
          }
          infrastructure {
            color
            href
            language
            subtitle
            title
          }
        }
      }
    }
  `)
    return (
        <>

            <Row>
            {getArticles(data.allDataJson.nodes[0][content])}
            </Row>
        </>
    )
}