import React from 'react'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function UploadButton(props) {
    const {label} = props
    return (
        <>
            <input
                accept="*"
                style={{ display: 'none' }}
                id="contained-button-file"
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" size="small" 
                color="default" 
                component="span" 
                style={{marginBottom: '2px',}} 
                startIcon={<CloudUploadIcon />}>
                    {label}
                </Button>
            </label>
        </>
    )
}
