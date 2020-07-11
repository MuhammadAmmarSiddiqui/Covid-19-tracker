import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublicIcon from '@material-ui/icons/Public';
import EqualizerIcon from '@material-ui/icons/Equalizer';
const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
});

export default function BottomNav({screenConfig}) {
  const classes = useStyles();
 // const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<PublicIcon />} />
      <BottomNavigationAction label="Country Stats" icon={<EqualizerIcon />} />
    </BottomNavigation>
  );
}
