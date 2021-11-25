import React, { useState } from 'react'
import './Temperature.css'
import { Button } from 'react-bootstrap'
function Tempreture() {
    const [input, setInput1] = useState()
    const [result, setResult] = useState()
    const [cResult, setCResult] = useState(false)
    const [fResult, setFResult] = useState(false)
    const setInput = (e) => {
        e.preventDefault();
        setInput1(e.target.value)
    }
    const PassId = (id) => {
        let flag = document.getElementById('unit').selectedIndex
        if (flag === 0) {
            setFResult(true)
        }
        else if (flag === 1) {
            setCResult(true)
        }
    }
    const convert = () => {
        if (cResult === true) {
            let c = (input - 32) * 0.55
            setResult(c)
        }
        else {
            let f = (input * 1.8) + 32
            setResult(f)
        }
    }
    return (
        <>
            <h3 className='temp-header'>Temperature Converter</h3>
            <div className="card-container-temp">
                <div className='card-temp card1-temp'>
                    <div className='text-box-div'>
                        <input type='text' onChange={setInput} id='input' />
                        <select id="unit" style={{ height: '30px', marginLeft: '30px' }} onChange={PassId}>
                            <option  >Celsius to Fahrenheit</option>
                            <option >Fahrenheit to Celsius </option>
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

export default Tempreture
