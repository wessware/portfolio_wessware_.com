import React from 'react'
import './about.css'
import Anal from '../../images/wtl.png'
import Ach from '../../images/philosophia.png'

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img  
                src= {Anal}
                className='a-img' 
                alt=''
                />
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Wessware</h1>
            <p className='a-sub'>
            Wessware Technologies is a digital age solutions provider and consultancy service focusing on an array 
            of subjects and how they interact and impact society. Our aim is to connect the dots using a much more
            canvas that encompasses Art, Literature, Technology, Religion, Engineering, Mathematics, Philosphy, History, 
            Physics, Pyschology and Sociology. <br/>
            Our conversation is centered on Family, Religion, School, Banks & Government <br/>
            Our solutions are centered on an integrated service provision that harmonizes these institutions
            
            </p>
            <p className='a-desc'>
            
            </p>
            <div className='a-award'>
                <img className='a-award-img' src={Anal} alt=''/>
                <div className='a-award-texts'>
                    <h4 className='a-award-title'>Wessware Technology Lab</h4>
                    <p className='a-award-desc'>
                        Wessware Technology Lab is a Wessware Technologies subsidiary that focuses on providing
                        technical and consultancy solutions in Science, Technology, Engineering & Mathematics
                    </p>
                </div>
            </div>
            <div className='a-award'>
                <img className='a-award-img' src={Ach} alt=''/>
                <div className='a-award-texts'>
                    <h4 className='a-award-title'>Philosphia</h4>
                    <p className='a-award-desc'>
                        Philosphia is a Wessware Technologies podcast on which we discuss all matters of STEM, Philosphy,
                        Art, Literature, Religion, Sociology <b>to infinity</b>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About