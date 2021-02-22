import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Agent from './Card/Agent';
import useStyles from './styles';

const Agents = ({ setCurrentId }) => {
  const agents = useSelector((state) => state.agents);
  const classes = useStyles();

  return (
    !agents.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {agents.map((agent) => (
          // <Grid key={post._id} item xs={12} sm={6} md={6}>
          //   <Agent post={post} setCurrentId={setCurrentId} />
          // </Grid>
          agent
        ))}
      </Grid>
    )
  );
};

export default Agents;