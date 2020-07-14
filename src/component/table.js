import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import FormControl from '@material-ui/core/FormControl';
import {Input, InputLabel, FormHelperText} from '@material-ui/core/';
import {TextField, Button} from '@material-ui/core/'
import {TableContext} from '../context/tableContext';
import EnhancedTableHead from './tableHead'
import EnhancedTableToolbar from './tableToolBar'

// // the function that grabs the rows
// function createData(symbol, stockChange, marketCap, sharePrice, chart) {
//   return { symbol, stockChange, marketCap, sharePrice, chart};
// }

// // the rows
// const rows = [
//   createData('BA', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('AAPL', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// // function that descends the rows
// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }


// //function that compares to descend
// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }



// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// heading cells and there indentifiers

// const headCells = [
//   { id: 'symbol', numeric: false, disablePadding: true, label: 'Stock Ticker' },
//   { id: 'stockChange', numeric: true, disablePadding: false, label: '24 hr. change' },
//   { id: 'marketCap', numeric: true, disablePadding: false, label: 'marketCap (USD) ' },
//   { id: 'sharePrice', numeric: true, disablePadding: false, label: 'Share Price' },
//   { id: 'chart', numeric: false, disablePadding: false, label: 'chart' },
// ];

// function EnhancedTableHead(props) {
//     // number of selected  
//     const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//     const createSortHandler = (property) => (event) => {
//         onRequestSort(event, property);
//     };

// const sortTableComponent = (id, headCellName) => {
//     return (<TableSortLabel
//         active={orderBy === id}
//         direction={orderBy === id ? order : 'asc'}
//         onClick={createSortHandler(id)}
//     >
//         {headCellName}
//         {orderBy === id ? (
//         <span className={classes.visuallyHidden}>
//             {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//         </span>
//         ) : null}
//     </TableSortLabel>)
// }

  

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'select all symbols' }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             { headCell.id !== 'chart' ? (
//                 <TableSortLabel
//                     active={orderBy === headCell.id}
//                     direction={orderBy === headCell.id ? order : 'asc'}
//                     onClick={createSortHandler(headCell.id)}
//                 >
//                     {headCell.label}
//                     {orderBy === headCell.id ? (
//                     <span className={classes.visuallyHidden}>
//                         {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                     </span>
//                     ) : null}
//                 </TableSortLabel>
//                 ) : headCell.label
//             }

//             {/* { headCell.id !== 'chart' ? 
//                 sortTableComponent(headCell.id, headCell.label) 
//                 : headCell.label
//             } */}
//             {/* make sortable */}
//             {/* {headCell.id} */}

//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: '1 1 100%',
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const {rows, setRows, money, setMoney} = useContext(TableContext)
//   const {setSelected, selected, numSelected } = props;

//   const deleteRow = () => {
//     console.log(selected);
//     const rowArray = props.rows.filter(row => {
//         if(!selected.includes(row.symbol)) {
//             return row;
//         } 
//     })
//     setRows(rowArray);
//     console.log("this is leftOver", rowArray)
//                 console.log(selected)
//                 setSelected([])
//   }
//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//           Stocks
//         </Typography>
//       )}
//       {/* button for Deleting   */}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton onClick={deleteRow} aria-label="delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
    const {rows, setRows, money, setMoney} = useContext(TableContext)
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('stockChange');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [currentTicker, setCurrentTicker] = React.useState('');


    // function that descends the rows
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
  
  
    //function that compares to descend
    function getComparator(order, orderBy) {
        return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }


    // the function that grabs the rows
    function createData(symbol, stockChange, marketCap, sharePrice, chart) {
        return { symbol, stockChange, marketCap, sharePrice, chart};
    }

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }
    
    // the rows
    // const rows = [
    //     createData('BA', 305, 3.7, 67, 4.3),
    //     createData('Donut', 452, 25.0, 51, 4.9),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('AAPL', 159, 6.0, 24, 4.0),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //     createData('Honeycomb', 408, 3.2, 87, 6.5),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Jelly Bean', 375, 0.0, 94, 0.0),
    //     createData('KitKat', 518, 26.0, 65, 7.0),
    //     createData('Lollipop', 392, 0.2, 98, 0.0),
    //     createData('Marshmallow', 318, 0, 81, 2.0),
    //     createData('Nougat', 360, 19.0, 9, 37.0),
    //     createData('Oreo', 437, 18.0, 63, 4.0),
    // ];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.symbol);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, symbol) => {
    const selectedIndex = selected.indexOf(symbol);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, symbol);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setRows((prevRows) => [...prevRows, ...[createData(`${currentTicker}`, 452, 25.0, 51, 4.9)]])
    console.log(currentTicker)
    // alert('this is what you entered ' + currentTicker);
    setCurrentTicker('');
  }

  const isSelected = (symbol) => selected.indexOf(symbol) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
        <form onSubmit={onSubmitForm} noValidate autoComplete="off">
            <FormControl>
                <div style={{display: "flex"}}>
                    <TextField id="outlined-basic" value={currentTicker} label="Outlined" variant="outlined" onChange={e => setCurrentTicker(e.target.value)}/>
                    <Button type="submit">Add</Button>
                </div>
            </FormControl>
        </form>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar rows={rows} setSelected={setSelected} selected={selected} numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.symbol);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.symbol)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.symbol}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.symbol}
                      </TableCell>
                      <TableCell align="right">{row.stockChange}</TableCell>
                      <TableCell align="right">{row.marketCap}</TableCell>
                      <TableCell align="right">{row.sharePrice}</TableCell>
                      <TableCell align="right"><img
      style={{width: 100, height: 50}}
      source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
    />{row.chart}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}
