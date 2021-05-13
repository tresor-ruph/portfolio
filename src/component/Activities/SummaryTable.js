import { Table } from 'react-bootstrap'

const SummaryTable = () => {
    return (

        <div style={{backgroundColor: 'white', marginTop: '10%', width:'80%', marginLeft: '10%'}} >
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th scope="col">Activity</th>
                    <th scope="col">Time passed (hrs)</th>
                    <th scope="col">Time valued (hrs)</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Formation Vue js</td>
                    <td>49 </td>
                    <td>10 </td>
                    <td><a className='btn'>Image</a></td>
                    
                </tr>
                <tr>
                    <td>Programmation en Java</td>
                    <td>40</td>
                    <td>10 </td>
                    <td><a className='btn'>Image</a></td>

                </tr>
                <tr>
                    <td>Programmation en C++</td>
                    <td>50</td>
                    <td>10 </td>
                    <td><a className='btn'>Image</a></td>

                </tr>
                <tr>
                    <td>Ephec Tutorat</td>
                    <td>40</td>
                    <td>10 </td>
                    <td><a className='btn'>Image</a></td>

                </tr>
                <tr>
                    <td>Cyber security challenge</td>
                    <td>10</td>
                    <td>5 </td>
                    <td><a className='btn'>Image</a></td>

                </tr>
                <tr>
                    <td>IT.meet.IT</td>
                    <td>3</td>
                    <td>3 </td>
                    <td><a  className='btn'>Image</a></td>

                </tr>
            </tbody>
        </Table></div>)

}
export default SummaryTable
