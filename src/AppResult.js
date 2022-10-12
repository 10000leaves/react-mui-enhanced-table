import EnhancedTable from './EnhancedTable';
import BasicTable from './BasicTable';

import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

let searchedIndustry = [];
let searchedYears = '';

const years = [2022,2021,2020,2019,2018,];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function SelectIndustry(props) {
  const { selected, handleSearchIndustry, loading, handleLoading, selectedYear } = props;
  const numSelected = selected.length;

  const handleClick = (event) => {
    handleLoading(true);

    console.log('3秒待つ');
    const ms = 3000;
    setTimeout(() => {
      if(numSelected > 0){
        console.log(selectedYear + '年\n' + selected);
        handleSearchIndustry(selected);
        searchedYears=selectedYear;
      }
      console.log('3秒経った');
      handleLoading(false);
    }, ms);
  }

  return (
    <LoadingButton
      variant="contained"
      sx={{ padding: 1, margin: 2 }}
      onClick={() => {
        handleClick();
      }}
      loading={loading}
      disabled={numSelected > 0 ? false : true}
    >
      {numSelected}業種を検索
    </LoadingButton>
  )
}

SelectIndustry.propTypes = {
  selected: PropTypes.array,
  handleSearchIndustry: PropTypes.func,
}

function ResultData(props) {
  const { searchedYears, numSearched } = props;
  return (
    <div>
      <TextField
        id="standard-read-only-input"
        label="選択年"
        sx={{ width: 100 }}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
        value={searchedYears}
      />
      <TextField
        id="standard-read-only-input"
        label="検索業種数"
        sx={{ width: 150 }}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
        value={numSearched}
      />
      <TextField
        id="standard-read-only-input"
        label="単語出現会社数"
        sx={{ width: 150 }}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
        value={`${numSearched}/${numSearched}`}
      />
    </div>
  )
}

ResultData.propTypes = {
  searchedYears: PropTypes.number.isRequired,
  numSearched: PropTypes.number.isRequired,
}

function AppResult(props) {
  const { setHandleSelectRow } = props;
  const [selectedIndustry, setSelectedIndustry] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndustry = (newIndustry) => {
    setSelectedIndustry(newIndustry);
  };

  const handleSearchIndustry = (newIndustry) => {
    searchedIndustry=(newIndustry);
  };

  const handleLoading = (newLoading) => {
    setLoading(newLoading);
  };

  const handleSelectRow = (year, secCode) => {
    setHandleSelectRow(year, secCode)
  }

  return (
    <div>
      <h2>業種別単語分析一覧</h2>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          variant="fullWidth"
          aria-label="full width tabs"
        >
          {years.map((year, index) => (
            <Tab label={year} {...a11yProps({index})} key={index} sx={{ fontSize: '24px', fontWeight: 'bold' }}/>
          ))}
        </Tabs>
      </Box>
      {years.map((year, index) => (
        <TabPanel value={tabValue} index={index} key={index}>
          {/* tab start */}
          <EnhancedTable handleChangeIndustry={handleChangeIndustry}/>
          <SelectIndustry selected={selectedIndustry} handleSearchIndustry={handleSearchIndustry} loading={loading} handleLoading={handleLoading} selectedYear={year} />
          {/* tab end */}
        </TabPanel>
      ))}
      <br/>
      {
        loading ?(
          <div>
            <h2>銘柄別詳細一覧</h2>
            <Box
              sx={{
                width: '100%',
                height: 500,
                borderRadius: 1,
                backgroundColor: '#e0e0e0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress sx={{ padding: 1, margin: 2 }}/>
            </Box>
          </div>
        ):(
          searchedIndustry.length > 0 ?(
            <div>
              <h2>銘柄別詳細一覧</h2>
              <ResultData numSearched={searchedIndustry.length} searchedYears={searchedYears} />
              <br/>
              <BasicTable searchedYears={searchedYears} handleSelectRow={handleSelectRow}/>
            </div>
          ):
            <></>
        )
      }
    </div>
  );
}

export default AppResult;

AppResult.propTypes = {
  setHandleSelectRow: PropTypes.func,
}
