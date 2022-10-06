import EnhancedTable from './EnhancedTable';
import BasicTable from './BasicTable';

import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SelectIndustry(props) {
  const { selected,handleSearchIndustry } = props;
  const numSelected = selected.length;

  const handleClick = (event) => {
    if(numSelected > 0){
      alert(selected);
      handleSearchIndustry(selected)
    } else {
      alert('業種を選択してください');
    }
  }

  return (
    <Button
      variant="contained"
      sx={{ padding: 1, margin: 2 }}
      onClick={() => {
        handleClick();
      }}
      disabled={numSelected > 0 ? false : true}
    >
      {numSelected}業種を検索
    </Button>
  )
}

SelectIndustry.propTypes = {
  selected: PropTypes.array,
  handleSearchIndustry: PropTypes.func,
}

function ResultData(props) {
  const { selectedYear, numSearched } = props;
  return (
    <div>
      <TextField
        id="standard-read-only-input"
        label="年"
        value={selectedYear}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-read-only-input"
        label="検索業種数"
        value={numSearched}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-read-only-input"
        label="登録会社数"
        value="200"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        id="standard-read-only-input"
        label="単語出現会社数"
        value="200"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
    </div>
  )
}

ResultData.propTypes = {
  selectedYear: PropTypes.number.isRequired,
  numSearched: PropTypes.number.isRequired,
}

function AppResult(props) {
  const { selectedYear } = props;
  const [selectedIndustry, setSelectedIndustry] = React.useState([]);
  const [searchedIndustry, setSearchedIndustry] = React.useState([]);

  const handleChangeIndustry = (newIndustry) => {
    setSelectedIndustry(newIndustry);
  };

  const handleSearchIndustry = (newIndustry) => {
    setSearchedIndustry(newIndustry);
  };

  return (
    <div>
      <h2>業種別単語分析一覧</h2>
      <EnhancedTable handleChangeIndustry={handleChangeIndustry}/>
      <SelectIndustry selected={selectedIndustry} handleSearchIndustry={handleSearchIndustry} />
      <br/>
      <h2>銘柄別詳細一覧</h2>
      {
        searchedIndustry.length > 0
        ?(
          <div>
            <ResultData numSearched={searchedIndustry.length} selectedYear={selectedYear} />
            <br/>
            <BasicTable/>
          </div>
        )
        :<div>レコードはありません</div>
      }
    </div>
  );
}

export default AppResult;

AppResult.propTypes = {
  selectedYear: PropTypes.number.isRequired,
}