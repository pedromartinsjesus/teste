import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
    'Update',
    'Delete',

];

var nome = "Pedro";

const ITEM_HEIGHT = 30;

export default function LongMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [nomeCompleto, setNome] = React.useState(nome);
    const open = Boolean(anchorEl);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
        setNome("Pedro Martins");
        console.log(nomeCompleto);


    }

    function handleClose(option) {
        console.log(option);
        setAnchorEl(null);
        props.handleOpen();
        
    }


    return (
        <div>
            <IconButton
                aria-label="More"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                }}
            >
                {options.map(option => (
                    <MenuItem key={option}  selected={option === ''} onClick={() => handleClose(option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}