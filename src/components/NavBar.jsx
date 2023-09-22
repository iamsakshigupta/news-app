import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
    static propTypes = {}
    

    render() {
        const toggleMode = () => {
            const darkToggle = document.querySelector('.dark-toggle');
            darkToggle.addEventListener('click', (event) => {
              event.preventDefault();
              document.documentElement.classList.toggle('dark')
              
        
            })
            document.body.style.backgroundColor="#fff";
        
          }
        
        return (
            
            <div>
                <div className='navbar font-roboto '>
                    <div className='max-w-7xl px-4 mx-auto py-5'>
                        <div className='flex items-center'>
                        <a className='font-bold text-3xl text-red-500 ' href="/">NewsMonkey</a>
                        <p className='text-2xl font-semibold text-slate-500 dark:text-slate-50 ml-7'>|</p>
                        <ul>
                            <li className='ml-7 dark-toggle font-medium text-white dark:bg-slate-200 dark:text-black px-5 py-2 rounded-lg bg-slate-800'>
                                <button onClick={toggleMode} href="/">Dark Mode</button>
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