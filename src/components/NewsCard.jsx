import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsCard extends Component {
  render() {
    return (
      <div>
        {/*API Key 9796962f8b0f43398523fd4a4b557f70 */}
        <div className='max-w-7xl px-4 mx-auto py-5 flex flex-col'>
          <h2 className='font-bold text-2xl'>Top Headlines</h2>
          <div className='flex justify-between '>
            <div className=''>
              <NewsItem />
            </div>
            <div className=''>
              <NewsItem />
            </div>
            <div className=''>
              <NewsItem />
            </div>
          </div>
          
          
          
        </div>
        



      </div>

    )
  }
}

export default NewsCard