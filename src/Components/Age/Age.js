import React, { useState } from 'react'
import '../Age/Age.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {Button} from 'react-bootstrap'
import moment from 'moment'
function Age() {
    const [selectedDate1, setSelectedDate1] = useState()
    let [result, setResult] = useState()
    const calculateAge = (e) => {
        e.preventDefault(); 
        let birthDate = moment(document.getElementById('from').value)
        let fromYear = parseInt(birthDate.format('YYYY'))
        let date=new Date()
        result=date.getFullYear()-fromYear
        setResult(result)
    }
    return (
        <>
            <h3 className='age-header'>Age Calculator</h3>
            <div className="card-container-age">
                <div className='card-age card1-age'>
                    <form className='age-form'>
                        <label className='date-label' >Select Birth-Date or Enter in MM-DD-YYYY format</label>
                        <DatePicker selected={selectedDate1}
                            onChange={date1 => setSelectedDate1(date1)}
                            // dateFormat='dd-MM-yyyy'
                            id='from'
                        />
                        <Button style={{marginTop:'20px'}} type="button" className="btn btn-success" onClick={calculateAge}>Calculate</Button>
                        <h3 style={{marginTop:'20px'}}>{result}</h3>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Age
