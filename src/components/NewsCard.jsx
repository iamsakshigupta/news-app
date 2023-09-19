import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsCard extends Component {
  render() {
    return (
      <div>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>

      </div>
      
    )
  }
}

export default NewsCard