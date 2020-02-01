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
    console.log(event.target)
    props.dataSetState(open);
  };

  const sideList = () => (
    <div
      id="controller-left-bar"
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{'backgroundColor':'#19204c','color':'#fde2b5','minHeight':'100vh'}}
    >

    <CardMedia
    component="img"
    src="https://avatars0.githubusercontent.com/u/30536751"
    
    >
        
    </CardMedia>

        <Typography align="center" style={{'padding':'10px'}} className={classes.title} variant="h6" noWrap>
                Görkem Bayraktar
        </Typography>

        <Divider />
     
        <Typography style={{'color':'#fde2b5'}} align="center" className={classes.title} variant="h6" noWrap>
            <Link target="_blank" href="https://github.com/grkm16" color="inherit">
                <GitHubIcon fontSize="large"></GitHubIcon>
            </Link>
            <Link target="_blank" href="https://www.facebook.com/grkm16"  color="inherit">
                <FacebookIcon fontSize="large"></FacebookIcon>
            </Link>
            <Link href="#"  color="inherit">
              <InstagramIcon fontSize="large"></InstagramIcon>
            </Link>
        </Typography>

     
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