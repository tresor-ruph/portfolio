import { Table } from 'react-bootstrap'
import { Zoom } from 'react-reveal'
import { useHistory } from 'react-router-dom'
const SummaryTable = () => {

    let history = useHistory()
    const toggleView = () => {
        history.push('/Activities')
    }
    const navigateTo =(id)=>{
        history.push('/Activities/details/'+id)
    }
    return (
        <div className="main" >
            <a onClick={() => toggleView()}>
                <img
                    src="https://img.icons8.com/android/24/ffffff/arrow.png"
                    alt="arrow"
                    width="30"
                    className="return"
                />
            </a>
            <Zoom>
            <div style={{ backgroundColor: 'white', marginTop: '5vh', width: '80%', marginLeft: '' }} >

                <Table striped   size="sm" responsive>
                    
                    <thead>
                        <tr>
                            <th scope="col">Activity</th>
                            <th scope="col">Time passed (hrs)</th>
                            <th scope="col">Time valued (hrs)</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Formation Vue js</td>
                            <td>49 </td>
                            <td>10 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(0)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>Formation Java</td>
                            <td>40</td>
                            <td>10 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(0)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>Formation C++</td>
                            <td>50</td>
                            <td>10 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(0)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>Formation Javascript</td>
                            <td>20</td>
                            <td>0 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}}className='btn detail-btn' onClick={() =>navigateTo(0)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>Les réseau de zéro</td>
                            <td>30</td>
                            <td>0 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(0)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>Ephec Tutorat</td>
                            <td>20</td>
                            <td>10 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(2)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>Cyber security challenge</td>
                            <td>10</td>
                            <td>10 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(1)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>IT.meet.IT</td>
                            <td>3</td>
                            <td>3 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(3)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td>Superprof</td>
                            <td>20</td>
                            <td>10 </td>
                            <td><btn style={{ backgroundColor: '#57B27C', padding: '0px'}} className='btn detail-btn' onClick={() =>navigateTo(5)}>Detail</btn></td>

                        </tr>
                        <tr>
                            <td style={{fontWeight: 'bolder'}}>Total Time</td>
                            <td style={{fontWeight: 'bolder'}}>242</td>
                            <td style={{fontWeight: 'bolder'}}>63 </td>

                        </tr>
                    </tbody>
                </Table>
           
                </div>
                </Zoom>
        </div>
    )

}
export default SummaryTable
