import React, {useState} from 'react';
import {IconButton, InputAdornment, TextField} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Button from "@mui/material/Button";


type EditableSpanPropsType = {
    name: string
    changeNameHandel: (value: string) => void
}

const EditableSpan = ({name,changeNameHandel}: EditableSpanPropsType) => {


    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState(name)

    const ChangeName = () => {
        changeNameHandel(value)
        setEditMode(!editMode)
    }
    const EditModeOn = () => {
        setEditMode(!editMode)
    }

    return editMode
        ?  <TextField
            onChange={(e) => setValue(e.currentTarget.value)}
            onBlur={ChangeName}
            autoFocus={true}
            value={value}
            id="standard-basic"
            label="Standard"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <Button onClick={ChangeName} style={{width: '22px', height: '22px'}} size={"small"} variant="contained">Save</Button>
                    </InputAdornment>
                ),
            }}
            variant="standard"
        />
        :  <div className="profile__name">
                <span style={{fontWeight: '500'}}>{value}</span>
                <IconButton onClick={EditModeOn} aria-label="delete" size="large">
                    <BorderColorIcon color={"action"} />
                </IconButton>
           </div>

};

export default EditableSpan;