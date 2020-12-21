import { makeStyles, withStyles } from '@material-ui/core/styles'

export const IconThemeStyle = makeStyles({
    root: {
        width: '20px !important',
        fill: 'var(--yellowColor) !important',
        transform: 'rotate(150deg)',
        zIndex: '0',
        position: 'relative'
    }
})

export const ButtonStyle = makeStyles({
    root: {
        height: '40px',
        '& .MuiButton-label': {
            fontSize: '16px',
            textTransform: 'none'
        },
        '& .MuiTouchRipple-root': {

        }
    }, 

    outlineBlue : {
        '& .MuiButton-label': {
            color: 'var(--blueColor)',
        },
        '& .MuiTouchRipple-root': {
            color: 'var(--blueColor)',
            border: '1px solid var(--blueColor)'
        }
    }
})

export const loadingIcon = makeStyles({
    root: {
        '& circle': {
            stroke: 'var(--blueColor)'
        }
    }
}) 

export const InputStyle = makeStyles({
    root: {
        '& label': {
            color: 'var(--lightBlackColor)'
        },
        '& label.Mui-focused': {
            color: 'var(--blueColor)'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'var(--borderColor)',
                transition: '.3s border-color'
            },
            '&:hover fieldset': {
                borderColor: 'var(--lightBlackColor)'
            },
            '&.Mui-focused fieldset': {
                border: '1px solid var(--blueColor)'
            }
        },
        '& input, & textarea': {
            color: 'var(--mainColor)',
            transition: '.3s color'
        }
    }
})