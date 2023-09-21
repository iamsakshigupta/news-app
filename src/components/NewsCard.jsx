import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsCard extends Component {
  render() {
    return (
      <div>
        {/*API Key 9796962f8b0f43398523fd4a4b557f70 */}
        <div className='max-w-7xl px-4 mx-auto py-5 flex flex-col'>
          <h2 className='font-bold text-2xl'>Top Headlines</h2>
          <div className='flex my-7 justify-between'>
            <div className=''>
              <NewsItem title="myTitle" description="myDescription" imageUrl="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" />
            </div>
            <div className=''>
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            </div>
            <div className=''>
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://images.unsplash.com/photo-1607778102165-6a418ee9adf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" />
            </div>
          </div>
          
          
          
        </div>
        



      </div>

    )
  }
}

export default NewsCard