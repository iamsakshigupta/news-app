import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (

      <div className='font-roboto text-center'>
        <div className='max-w-7xl px-4 mx-auto py-5'>
          <div className='bg-slate-200 dark:bg-zinc-800 py-11 rounded-lg'>
            <p className='font-medium text-slate-500 dark:text-slate-200 text-l'>Wecome to Bulletin</p>
            <h1 className='font-bold dark:text-white text-2xl'>Crafting narratives that ignite <span className='text-red-500'>inspiration</span>, <span className='text-red-500'>knowledge</span>, and <span className='text-red-500'>entertainment</span>.</h1>

          </div>

        </div>

      </div>
    )
  }
}

export default Welcome