import React, { useState } from 'react'
import './Speed.css'
import { Button } from 'react-bootstrap'
function Distance() {
    const [input, setInput1] = useState()
    const [result, setResult] = useState()
    const [kResult, setKResult] = useState(false)
    const [mResult, setMResult] = useState(false)
    const setInput = (e) => {
        e.preventDefault();
        setInput1(e.target.value)
    }
    const ConvertInto = (id) => {
        let flag = document.getElementById('unit').selectedIndex
        if (flag === 0) {
            setMResult(true)
        }
        else if (flag === 1) {
            setKResult(true)
        }
    }
    const convert = () => {
        if (kResult === true) {
            let k = input*1.609
            setResult(k)
        }
        else {
            let m = input/1.609
            setResult(m)
        }
    }
    return (
        <>
            <h3 className='temp-header'>Speed Converter</h3>
            <div className="card-container-speed">
                <div className='card-speed card1-speed'>
                    <div className='text-box-div'>
                        <input type='text' onChange={setInput} id='input' />
                        <select id="unit" style={{ height: '30px', marginLeft: '30px' }} onChange={ConvertInto}>
                            <option  >KMPH to MPH</option>
                            <option  >MPH to KMPH </option>
                        </select>
                        <div className='button-div'>
                            <Button className="btn btn-success" onClick={convert}>Convert</Button>
                            <div style={{ marginLeft: '17px', marginTop: '20px' }}>
                                <h2 id='result' style={{ color: 'white' }} >{result}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Distance
