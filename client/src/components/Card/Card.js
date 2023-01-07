import React from 'react'
import { Box, Card as MuiCard, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import Image from 'mui-image'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


const StyledCard = styled(MuiCard)(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadiusSmall,
    '&:hover': {
        '& .MuiCardContent-root': {
            opacity: 1,
            visibility: 'visible'
        }
    },
    '& .MuiCardContent-root': {
        opacity: 0,
        visibility: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        transition: 'all .4s',
        '& .MuiCardActions-root': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& .MuiSvgIcon-root': {
                color: '#fff'
            }
        },
        '& .card-description': {
            position: 'absolute',
            bottom: theme.spacing(1)
        }
    }
}))

const Card = ({ item }) => {

    return (
        <Link to={`/place/${item._id}`}>
            <StyledCard>
                <Image 
                    alt="Card Image"
                    height={300}
                    src={item.images[0]}
                />
                <CardContent>
                    <CardActions>
                        <IconButton disableRipple>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton>
                            <ShareIcon disableRipple />
                        </IconButton>
                    </CardActions>
                    <Box class="card-description">
                        <Typography gutterBottom variant='h6' component="strong">
                            {item.title}
                        </Typography> 
                        <Typography variant="body2" component="p">
                            {item.location}
                        </Typography>
                    </Box>
                </CardContent>
            </StyledCard>
        </Link>
    )
}

export default Card