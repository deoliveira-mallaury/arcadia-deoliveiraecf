import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  React.useEffect(() => {
    document.getElementById('opinion_rating').value = value;
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    document.getElementById('opinion_rating').value = newValue;
  };
  console.log(value);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={handleChange}
    ></Rating>
  );
}
