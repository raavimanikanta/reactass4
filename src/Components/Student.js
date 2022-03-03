import React from 'react'
// import MaterialTable from "/material-table"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Student = () => {

  function createData(Name, Age, Course, Batch, Change) {
    return { Name, Age, Course, Batch, Change };
  }
  
  const rows = [
    createData('Manikanta', 23, "MERN" , "OCTOBER","EDIT"),
    createData("Prasad", 24, "MEAN", "OCTOBER","EDIT"),
    createData("John", 22,"MERN" , "OCTOBER" ,"EDIT"),
    createData('Daniel',25 , "MERN","OCTOBER","EDIT" ),
    createData('Johanas', 26, "MERN", "SEPTEMBER","EDIT" ),
    createData('Mallikarjun',23 , "MEAN", "NOV","EDIT" ),
    createData('Sampath',24 , "JAVA", "DECMBER","EDIT" ),
    createData('Daniel',25 , "PYTHON", "OCTOBER","EDIT" ),
    createData('Vikram',26 , "MERN", "DECEMBER","EDIT" ),
    createData('Meera',24 , "MERN", "NOV","EDIT" ),
  ];
  
  return (
    <div>
      <div className='cont-student'>
        <h1>Student-details</h1>
        <input type="text" className='input-details' placeholder='Add New Student' />
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        
        <TableHead className='header'>
          <TableRow className='rows'>
            <TableCell>NAME</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right" className='colr'>Change</TableCell>
          </TableRow>
        </TableHead>
      
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Course}</TableCell>
              <TableCell align="right">{row.Batch}</TableCell>
              <TableCell align="right">{row.Change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
      </div> 
        
        
  )
}

export default Student