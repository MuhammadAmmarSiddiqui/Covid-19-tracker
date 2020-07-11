import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


  

export default function Countries() {

    const [globalData, setGlobalData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
            let data = await response.json();
            setGlobalData(Object.values(Object.values(data.countryitems[0])));
            console.log(Object.values(Object.values(data.countryitems[0])));
        }
        getData();
    }, [])


    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Countries</TableCell>
            <TableCell align="right">Total Cases</TableCell>
            <TableCell align="right">Total Recovered</TableCell>
            <TableCell align="right">Total Deaths</TableCell>
            <TableCell align="right">Active Cases</TableCell>
            <TableCell align="right">Critical Cases</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalData.map((key, ind) => {
              return (
                <TableRow>
              <TableCell component="th" scope="row">
                {globalData[ind].title}
              </TableCell>
              <TableCell align="right">{globalData[ind].total_cases}</TableCell>
              <TableCell align="right">{globalData[ind].total_recovered}</TableCell>
              <TableCell align="right">{globalData[ind].total_deaths}</TableCell>
              <TableCell align="right">{globalData[ind].total_active_cases}</TableCell>
              <TableCell align="right">{globalData[ind].total_serious_cases}</TableCell>
            </TableRow>
              )
          })}
            
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}
