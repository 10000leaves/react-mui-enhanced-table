import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function AppResult2(props) {
  const { handleReset, year, secCode } = props;

  function BackButton(){
    return(
      <Button
        variant="contained"
        sx={{ padding: 1, margin: 2 }}
        onClick={() => {
          handleReset();
        }}
      >
        戻る
      </Button>
    )
  }

  return (
    <div>
      <h2>銘柄選択結果</h2>
      <p>検索年：{year}</p>
      <p>銘柄コード：{secCode}</p>
      <BackButton/>
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
          文章が表示されるスペース
      </Box>
      <BackButton/>
    </div>
  );
}

export default AppResult2;

AppResult2.propTypes = {
  year: PropTypes.string.isRequired,
  secCode: PropTypes.string.isRequired,
}