import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props
    return (
      <div>
        <div className='bg-white rounded-lg shadow-lg p-4 h-full'>
          <div className='flex flex-col h-full w-full'>
            <div className='flex-shrink-0'>
              <img
                src={!imageUrl?"https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80":imageUrl}
                alt='Card Image'
                className='w-full h-48 rounded-lg object-cover'
              />
            </div>
            <div className='flex-grow'>
              <h2 className='text-xl font-semibold mt-3'>{title}</h2>
              <p className='text-gray-600 mt-3 mb-7'>{description}</p>
              
              <a className='bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg hover:bg-blue-600' href={newsUrl} target='_blank'>
                Read More
              </a>
              {/* <button className='bg-blue-500 text-white px-4 py-2 mt-5 rounded-lg hover:bg-blue-600'>
                <a href={newsUrl} target='_blank'>Read More</a>
              </button> */}
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default NewsItem
