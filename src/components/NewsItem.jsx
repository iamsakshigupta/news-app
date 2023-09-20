import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props
    return (
      <div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    )
  }
}

export default NewsItem
