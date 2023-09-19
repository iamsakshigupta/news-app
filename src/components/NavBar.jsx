import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <div className='navbar font-roboto'>
                    <div className='max-w-7xl px-4 mx-auto py-5'>
                        <div className='flex items-center'>
                        <a className='font-bold text-3xl text-red-700 ' href="/">NewsMonkey</a>
                        <p className='text-2xl font-semibold text-slate-500 ml-7'>|</p>
                        <ul>
                            <li className='ml-7 font-medium text-slate-500'>
                                <a href="/">About</a>
                            </li>
                        </ul>
                        </div>
                       
                    </div>

                </div>

            </div>
        )
    }
}

export default NavBar