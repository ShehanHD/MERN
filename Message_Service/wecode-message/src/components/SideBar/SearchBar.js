import React from 'react'
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
        <FormControl>
            <OutlinedInput
                id="standard-adornment-password"
                type={'text'}
                placeholder={'Search Contacts....'}
                endAdornment={
                    <InputAdornment position="end" component={IconButton}>
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default SearchBar
