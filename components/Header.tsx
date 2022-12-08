import React, {useEffect, useState} from 'react'
import {alpha, styled} from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Menu, {MenuProps} from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from '@mui/icons-material/Home';
import ScienceIcon from '@mui/icons-material/Science';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from "next/link";

const Header: React.FC = () => {

    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? handleDarkTheme() : handleLightTheme()
    }, [])

    useEffect(() => {
        darkMode ? handleDarkTheme() : handleLightTheme()
    }, [darkMode]);

    const MaterialUISwitch = styled(Switch)(() => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: darkMode ? '#8796A5' : '#aab4be',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: darkMode ? '#003892' : '#001e3c',
            width: 32,
            height: 32,
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: darkMode ? '#8796A5' : '#aab4be',
            borderRadius: 20 / 2,
        },
    }));

    const handleDarkTheme = () => {
        removeAndAddTheme('light', 'dark')
    }
    const handleLightTheme = () => {
        removeAndAddTheme('dark', 'light')
    }

    const removeAndAddTheme = (toRemove: string, toAdd: string) => {
        document.documentElement.classList.remove(toRemove)
        document.documentElement.classList.add(toAdd)
        localStorage.theme = toAdd
        console.log(`${toAdd} theme!`)
    }

    const toggleColorMode = () => {
        setDarkMode(!darkMode);
    }

    const StyledMenu = styled((props: MenuProps) => (
        <Menu
            elevation={2}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            {...props}
        />
    ))(({theme}) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(5),
            minWidth: 180,
            color:
                !darkMode ? '#001e3c' : '#000',
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: '#000',
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        '#000',
                        theme.palette.action.selectedOpacity,
                    ),
                }
            },
        },
    }));

    const BasicMenu = () => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };


        return (
            <div>
                <Link href="/post">
                    <div className="text-black dark:text-white hover:bg-fuchsia-600">
                        Menu
                    </div>
                </Link>

                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <HomeIcon/>
                        Home
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <ScienceIcon/>
                        Projects
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <WorkHistoryIcon/>
                        CV
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <AlternateEmailIcon/>
                        Contact
                    </MenuItem>
                </StyledMenu>
            </div>
        );
    }

    return (
        <header className="bg-slate-100 dark:bg-gray-900 sm:h-20 py-5 sticky top-0">
            <div className="max-w-4xl mx-auto px-6">
                <div className="w-full flex flex-col sm:flex-row justify-center md:justify-between items-center">
                    <div className="flex flex-col sm:flex-row items-center sm:mb-0">
                        <div className="sm:ml-8 flex space-x-2 text-center">
                            <MaterialUISwitch
                                onClick={toggleColorMode}
                                checked={darkMode}
                            />
                            {/*<BasicMenu/>*/}
                            <div className="flex items-center text-gray-900 dark:text-white font-semibold">
                                <Link href="#">
                                    <h3 className="text-l md:text-xl px-2 md:px-4 hover:text-slate-400">About</h3>
                                </Link>
                                <h3 className="text-l md:text-xl px-2 md:px-4">Projects</h3>
                                <h3 className="text-l md:text-xl px-2 md:px-4">Contact</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
