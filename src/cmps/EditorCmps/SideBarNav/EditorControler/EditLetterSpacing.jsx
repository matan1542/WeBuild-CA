import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export function EditLetterSpacing({val, onUpdateCurrCmp,currCmp}) {
  val = +(val.replace('px',''))
  const classes = useStyles();
  const [value, setValue] = React.useState(val);

useEffect(() => {
  setValue(val)
}, [val])
  const handleSliderChange = async(event, newValue) => {
  const cmp = {...currCmp,info:{...currCmp.info,style:{...currCmp.info.style,letterSpacing:`${newValue}px`}}}
   await onUpdateCurrCmp(cmp)
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid container>
      <Box mr={2}>
        <Typography id="input-slider" gutterBottom>
            Letter Spacing
        </Typography>
        </Box>
        
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            min={0}
            step={1}
            max={40}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </div>
  );
}