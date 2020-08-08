import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const CoffeCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const title = props.title;
    const subtitle = props.subtitle;
    const avatarSrc = props.avatarSrc;
    const imageSrc = props.imageSrc;
    const description = props.description;
    return (
      <Card>
          <CardHeader 
                    avatar={
                        <Avatar src={avatarSrc}/>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <ShareIcon />
                        </IconButton>
                      }
                      title={title}
                      subheader={subtitle}              
          
          />
        <CardMedia style={{ height: "350px" }}
                image={imageSrc}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">BUY NOW</Button>
          <Button size="small" color="secondary">OFFER</Button>
        </CardActions>
      </Card>
    );
}

export default CoffeCard;
