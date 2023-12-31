import React from 'react'

const NewsItem =(props)=> {
  
    let { title, imageUrl, newsUrl } = props;
    return (
      <div>
        <div className='bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4 h-full'>
          <div className='flex flex-col h-full w-full'>
            <div className='flex-shrink-0'>
              <img
                src={!imageUrl?"https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80":imageUrl}
                alt='Card Image'
                className='w-full h-48 rounded-lg object-cover'
              />
            </div>
            <div className='flex-grow dark:text-white'>
              <h2 className='text-xl font-semibold my-5'>{title}</h2>
              
              
              <a className='bg-red-500 text-white px-5 py-2 mt-7 rounded-lg hover:bg-red-700' href={newsUrl} target='_blank'>
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

export default NewsItem
