import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import dateFormat from '../../helper/func.dateFormat'

import Link from 'next/link'

const useStyles = makeStyles({
  card: {
    maxWidth: 650,
    marginTop:80
  },
  media: {
    height: 300,
  },
});


export default function MediaCard({post}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography color="textSecondary" component="p" align="right">
             {dateFormat(post.date.current,"G UA Y")}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Paylaş
        </Button>
        <Link href={post.slug}>
          <Button size="small" color="primary">
            Daha fazla
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}