import React, {useState} from 'react'

import Apt1 from '../../assets/apt1.jpeg'
import Apt2 from '../../assets/apt2.jpeg'
import Apt3 from '../../assets/apt3.jpeg'

import Comm1 from '../../assets/commercial1.jpg'
import Comm2 from '../../assets/commercial2.jpg'
import Comm3 from '../../assets/commercial3.jpg'

import Agri1 from '../../assets/agri1.jpg'
import Agri2 from '../../assets/agri2.jpg'
import Agri3 from '../../assets/agri3.jpg'

import './Best.css'

const Best = () => {

    const [all, setAll] = useState(true)
    const [commercial, setCommercial] = useState(false)
    const [residential, setResidential] = useState(false)
    const [agricultural, setAgricultural] = useState(false)

    const changePropertyType = (id) => {
        switch(id){
            case 1:
                setAll(true)
                setCommercial(false)
                setResidential(false)
                setAgricultural(false)
                break;
            case 2:
                setAll(false)
                setCommercial(true)
                setResidential(false)
                setAgricultural(false)
                break;
            case 3:
                setAll(false)
                setCommercial(false)
                setResidential(true)
                setAgricultural(false)
                break;
            case 4:
                setAll(false)
                setCommercial(false)
                setResidential(false)
                setAgricultural(true)
                break;
            default: 
                break;
        }
    }

    return (
        <div className='best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <button onClick={() => changePropertyType(1)}>All</button>
                <button onClick={() => changePropertyType(2)}>Commercial</button>
                <button onClick={() => changePropertyType(3)}>Residential</button>
                <button onClick={() => changePropertyType(4)}>Agricultural</button>
            </div>
            <div className='container'>
                {
                    all ? 
                        <>
                            <img src={Comm1} alt=''/>
                            <img src={Apt1} alt=''/>
                            <img src={Agri1} alt=''/>
                        </>
                    :
                    commercial ?
                        <>
                            <img src={Comm1} alt=''/>
                            <img src={Comm2} alt=''/>
                            <img src={Comm3} alt=''/>
                        </>
                    : residential ? 
                        <>
                            <img src={Apt1} alt=''/>
                            <img src={Apt2} alt=''/>
                            <img src={Apt3} alt=''/>
                        </>
                    : agricultural ? 
                        <>
                            <img src={Agri1} alt=''/>
                            <img src={Agri2} alt=''/>
                            <img src={Agri3} alt=''/>
                        </>
                    : null
                }
                
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best