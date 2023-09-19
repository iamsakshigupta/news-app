import React from 'react'
import PropTypes from 'prop-types'

function welcome(props) {
  return (
    <div className='font-roboto text-center'>
        <div className='max-w-7xl px-4 mx-auto py-5'>
            <div className='bg-slate-200 py-11 rounded-lg'>
                <p className='font-medium text-slate-500 text-l'>Wecome to Bulletin</p>
                <h1 className='font-bold text-2xl'>Crafting narratives that ignite <span className='text-red-700'>inspiration</span>, <span className='text-red-700'>knowledge</span>, and <span className='text-red-700'>entertainment</span>.</h1>

            </div>

        </div>
    </div>
  )
}

welcome.propTypes = {}

export default welcome
