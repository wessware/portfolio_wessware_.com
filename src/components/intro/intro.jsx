import React from 'react'

import './intro.css'
import Me from '../../images/wessware_logo.png'

function intro() {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro' >Wessware</h2>
                <h1 className='i-name'>Technologies</h1>

                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Data Analysis</div>
                        <div className='i-title-item'>Data Consultancy</div>
                        <div className='i-title-item'>Data Science</div>
                        <div className='i-title-item'>Data Engineering</div>
                        <div className='i-title-item'>Media & Design</div>
                        <div className='i-title-item'>Graphic Design</div>
                        <div className='i-title-item'>Python Programming</div>
                        <div className='i-title-item'>Web Design</div>
                        <div className='i-title-item'>Web Development</div>
                        <div className='i-title-item'>Writing, Editing & Publishing</div>
                    </div>
                </div>
                <p className='i-desc'>
                    <b>When Logic Fails, Invoke Infinity</b> <br/>
                    It is a Wessware philosphy that all existential concepts and problems have an underlying
                    implicit point of origin [beyond simple logic] from which solutions and proper understanding should be derived
                </p>
            </div>
                <svg 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg"
                height="75"
                width="75"
                fill="none"
                stroke="black"
                viewBox="0 0 75 75" 
                className='i-scroll'
                enable-background="new 0 0 64 64"
                >
                <path id="Mouse-pc" d="M35,15.5974503h-2.1703224V1.40255c0-0.5527-0.4473-1-0.9999981-1c-0.5526791,0-1,0.4473-1,1v14.1949005H29
                    c-6.6275215,0-12,5.3724995-12,12v24c0,6.6273003,5.3724785,12,12,12h6c6.6273804,0,12-5.3726997,12-12v-24
                    C47,20.9699497,41.6273804,15.5974503,35,15.5974503z M35,17.5974503c5.5139999,0,10,4.485899,10,10v7.7504005H32.8296776
                    v-1.6543999h1.0059013c1.1044998,0,2-0.895401,2-2v-8c0-1.1045017-0.8955002-2-2-2h-1.0059013v-4.0960007H35z
                    M33.8355789,23.6934509v8h-4v-8H33.8355789z M29,17.5974503h1.8296795v4.0960007h-0.9941006c-1.104578,0-2,0.8954983-2,2v8
                    c0,1.104599,0.895422,2,2,2h0.9941006v1.6543999H19v-7.7504005C19,22.0833492,23.4858799,17.5974503,29,17.5974503z M35,61.5974503
                    h-6c-5.5141201,0-10-4.4860001-10-10V37.3478508h26v14.2495995C45,57.1114502,40.5139999,61.5974503,35,61.5974503z"/>
                </svg>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img src={Me} alt='' className='i-img'/>
        </div>
    </div>
  )
}

export default intro