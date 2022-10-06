import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

function createData(secCode, company, industry, count, page) {
  return { secCode, company, industry, count, page };
}

const rows = [
  createData(1111, 'あああ株式会社', '水産・農林業', 159, 'P.4、P.5、P.12、P.15'),
  createData(2222, 'あああ株式会社', '水産・農林業', 237, 'P.4、P.5、P.12、P.15'),
  createData(3333, 'あああ株式会社', '水産・農林業', 262, 'P.4、P.5、P.12、P.15'),
  createData(4444, 'あああ株式会社', '水産・農林業', 305, 'P.4、P.5、P.12、P.15'),
  createData(5555, 'あああ株式会社', '水産・農林業', 356, 'P.4、P.5、P.12、P.15'),
  createData(6666, 'あああ株式会社', '水産・農林業', 159, 'P.4、P.5、P.12、P.15'),
  createData(7777, 'あああ株式会社', '水産・農林業', 237, 'P.4、P.5、P.12、P.15'),
  createData(8888, 'あああ株式会社', '水産・農林業', 262, 'P.4、P.5、P.12、P.15'),
  createData(9999, 'あああ株式会社', '水産・農林業', 305, 'P.4、P.5、P.12、P.15'),
];

const headCells = [
  {
    id: 'secCode',
    numeric: false,
    disablePadding: true,
    label: '銘柄コード',
  },
  {
    id: 'company',
    numeric: true,
    disablePadding: false,
    label: '会社名',
  },
  {
    id: 'industry',
    numeric: true,
    disablePadding: false,
    label: '業種',
  },
  {
    id: 'count',
    numeric: true,
    disablePadding: false,
    label: '単語出現数',
  },
  {
    id: 'page',
    numeric: true,
    disablePadding: false,
    label: '単語出現ページ数',
  },
];


function BasicTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

BasicTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function BasicTable() {
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('count');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(30);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <BasicTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    key={row.secCode}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.secCode}
                    </TableCell>
                    <TableCell component="th" scope="row">{row.company}</TableCell>
                    <TableCell component="th" scope="row">{row.industry}</TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell component="th" scope="row">{row.page}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (33) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 30, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}