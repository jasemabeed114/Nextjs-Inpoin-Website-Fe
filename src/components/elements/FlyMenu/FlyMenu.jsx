import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from "next/link";
import { FaBars, FaHome, FaTicketAlt, FaUsers, FaPaperPlane } from "react-icons/fa"


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function FlyMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
            <FaBars />
      </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link href="/" passHref>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <FaHome fontSize="1.5rem" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </StyledMenuItem>
                </Link>
                <Link href="/product-and-services" passHref>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <FaTicketAlt fontSize="1.5rem"/>
                        </ListItemIcon>
                        <ListItemText primary="Product & Services" />
                    </StyledMenuItem>
                </Link>
                <Link href="/login" passHref>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <FaUsers fontSize="1.5rem" />
                        </ListItemIcon>
                        <ListItemText primary="Community" />
                    </StyledMenuItem>
                </Link>
                <Link href="/contact-us" passHref>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <FaPaperPlane fontSize="1.5rem" />
                        </ListItemIcon>
                        <ListItemText primary="Contact Us" />
                    </StyledMenuItem>
                </Link>
            </StyledMenu>
        </div>
    );
}