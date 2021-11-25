import React, { useState } from 'react'
import '../Time/Time.css'
import { Button } from 'react-bootstrap'
function Time() {
    const [input, setInput1] = useState()
    const [result, setResult] = useState()
    const [sResult, setSResult] = useState(false)
    const [mResult, setMResult] = useState(false)
    const setInput = (e) => {
        e.preventDefault();
        setInput1(e.target.value)
    }
    const PassId = (id) => {
        let flag = document.getElementById('unit').selectedIndex
        if (flag === 0) {
            setMResult(true)
        }
        else if (flag === 1) {
            setSResult(true)
        }
    }
    const convert = () => {
        if (mResult === true) {
            let s = input*60
            setResult(s)
        }
        else {
            let m = input/60
            setResult(m)
        }
    }
    return (
        <>
            <h3 className='temp-header'>Time Converter</h3>
            <div className="card-container-time">
                <div className='card-time card1-time'>
                    <div className='text-box-div'>
                        <input type='text' onChange={setInput} id='input' />
                        <select id="unit" style={{ height: '30px', marginLeft: '30px' }} onChange={PassId}>
                            <option  >Minutes to Seconds</option>
                            <option  >Seconds to Minutes </option>
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

export default Time
