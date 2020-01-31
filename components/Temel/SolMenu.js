import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import {
    GitHub as GitHubIcon,
    Facebook as FacebookIcon,
    LinkedIn as LinkedInIcon,
    YouTube as YoutubeIcon,
    Instagram as InstagramIcon
} from '@material-ui/icons'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
 // const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    props.dataSetState(open);
  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

    <CardMedia
    component="img"
    src="https://avatars0.githubusercontent.com/u/30536751"
    style={{"padding":"15px","boxSizing":"border-box"}}
    >
        
    </CardMedia>

        <Typography align="center" className={classes.title} variant="h6" noWrap>
                Görkem Bayraktar
        </Typography>
        <Typography style={{'color':'black'}} align="center" className={classes.title} variant="h6" noWrap>
            <Link target="_blank" href="https://github.com/grkm16" color="inherit">
                <GitHubIcon fontSize="large"></GitHubIcon>
            </Link>
            <Link href="#"  color="inherit">
                <FacebookIcon fontSize="large"></FacebookIcon>
            </Link>
            <Link href="#"  color="inherit">
                <LinkedInIcon fontSize="large"></LinkedInIcon>
            </Link>
            <Link href="#"  color="inherit">
              <YoutubeIcon fontSize="large"></YoutubeIcon>
            </Link>
            <Link href="#"  color="inherit">
              <InstagramIcon fontSize="large"></InstagramIcon>
            </Link>
        </Typography>

      <Divider />
     
    </div>
  );

  return (
    <div>
      <Drawer open={props.dataState} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}