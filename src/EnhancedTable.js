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
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

function createData(industry, occurrences, average, max, min, median, stdev) {
  return {
    industry,
    occurrences,
    average,
    max,
    min,
    median,
    stdev,
  };
}

const rows = [
  createData('水産・農林業', 305, 3.7, 67, 4.3, 3.7, 67),
  createData('食料品', 452, 25.0, 51, 4.9, 25.0, 51),
  createData('鉱業', 262, 16.0, 24, 6.0, 16.0, 24),
  createData('石油・石炭製品', 159, 6.0, 24, 4.0, 6.0, 24),
  createData('建設業', 356, 16.0, 49, 3.9, 16.0, 49),
  createData('金属製品', 408, 3.2, 87, 6.5, 408, 3.2, 87),
  createData('ガラス・土石製品', 237, 9.0, 37, 4.3, 237, 9.0, 37),
  createData('繊維製品', 375, 0.0, 94, 0.0, 0.0, 94),
  createData('パルプ・紙', 518, 26.0, 65, 7.0, 26.0, 65),
  createData('化学', 392, 0.2, 98, 0.0, 0.2, 98),
  createData('医薬品', 318, 0, 81, 2.0, 0, 81),
  createData('ゴム製品', 360, 19.0, 9, 37.0, 19.0, 9),
  createData('輸送用機器', 437, 18.0, 63, 4.0, 18.0, 63),
  createData('鉄鋼', 305, 3.7, 67, 4.3, 3.7, 67),
  createData('非鉄金属', 305, 3.7, 67, 4.3, 3.7, 67),
  createData('機械', 452, 25.0, 51, 4.9, 25.0, 51),
  createData('電気機器', 262, 16.0, 24, 6.0, 16.0, 24),
  createData('精密機器', 159, 6.0, 24, 4.0, 6.0, 24),
  createData('その他製品', 356, 16.0, 49, 3.9, 16.0, 49),
  createData('情報・通信業', 408, 3.2, 87, 6.5, 408, 3.2, 87),
  createData('サービス業', 237, 9.0, 37, 4.3, 237, 9.0, 37),
  createData('電気・ガス業', 375, 0.0, 94, 0.0, 0.0, 94),
  createData('陸運業', 518, 26.0, 65, 7.0, 26.0, 65),
  createData('海運業', 392, 0.2, 98, 0.0, 0.2, 98),
  createData('空運業', 318, 0, 81, 2.0, 0, 81),
  createData('倉庫・運輸関連業', 360, 19.0, 9, 37.0, 19.0, 9),
  createData('卸売業', 437, 18.0, 63, 4.0, 18.0, 63),
  createData('小売業', 305, 3.7, 67, 4.3, 3.7, 67),
  createData('銀行業', 452, 25.0, 51, 4.9, 25.0, 51),
  createData('証券、商品先物取引業', 262, 16.0, 24, 6.0, 16.0, 24),
  createData('保険業', 159, 6.0, 24, 4.0, 6.0, 24),
  createData('その他金融業', 356, 16.0, 49, 3.9, 16.0, 49),
  createData('不動産業', 408, 3.2, 87, 6.5, 408, 3.2, 87),
];

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

const headCells = [
  {
    id: 'industry',
    numeric: false,
    disablePadding: true,
    label: '業種',
    allData: '全業種',
  },
  {
    id: 'occurrences',
    numeric: true,
    disablePadding: false,
    label: '単語出現会社数',
    allData: '200',
  },
  {
    id: 'average',
    numeric: true,
    disablePadding: false,
    label: '平均値',
    allData: '200',
  },
  {
    id: 'max',
    numeric: true,
    disablePadding: false,
    label: '最大値',
    allData: '200',
  },
  {
    id: 'min',
    numeric: true,
    disablePadding: false,
    label: '最小値',
    allData: '200',
  },
  {
    id: 'median',
    numeric: true,
    disablePadding: false,
    label: '中央値',
    allData: '200',
  },
  {
    id: 'stdev',
    numeric: true,
    disablePadding: false,
    label: '標準偏差',
    allData: '200',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
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
      <TableRow
        hover
        selected={numSelected > 0 ? true : false}
        onClick={onSelectAllClick}
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'industry' ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.allData}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable(props) {
  const { handleChangeIndustry } = props;
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('occurrences');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    let newSelected = [];

    // allをcheckか、全ての項目をcheckされてない時更新する
    if (event.target.checked || !(selected.length === rows.length)) {
      newSelected = rows.map((n) => n.industry);
    }

    handleChangeIndustry(newSelected); // 親state更新
    setSelected(newSelected);
  };

  const handleClick = (event, industry) => {
    const selectedIndex = selected.indexOf(industry);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, industry);
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

    handleChangeIndustry(newSelected); // 親state更新
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (industry) => selected.indexOf(industry) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-labelledby="tableTitle"
          size={'small'}
        >
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.slice().sort(getComparator(order, orderBy)) */}
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.industry);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.industry)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.industry}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.industry}
                    </TableCell>
                    <TableCell align="right">{row.occurrences}</TableCell>
                    <TableCell align="right">{row.average}</TableCell>
                    <TableCell align="right">{row.max}</TableCell>
                    <TableCell align="right">{row.min}</TableCell>
                    <TableCell align="right">{row.median}</TableCell>
                    <TableCell align="right">{row.stdev}</TableCell>
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
        rowsPerPageOptions={[5, 10, 20 ,33]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showFirstButton
        showLastButton
        labelRowsPerPage="ページに表示する行数："
      />
    </div>
  );
}