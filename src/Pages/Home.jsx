import { Button } from '@mui/material'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';

const Home = () => {
    const [formData, setFormData] = useState({ searchValue: "", selectedOption: "" });
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleOptionChange = (event, value) => {
        setFormData({ formData, selectedOption: value });  
    };

    const handleInputChange = (e) => {
        setFormData({ formData, searchValue: e.target.value });  
    };

    const handleClick = () => {
        // toast.success("You Clicked me");
        console.log("nbjgr4356",  formData)
    }

    return (
        <>
            <h1>Home</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                {/* <div>
                    <TextField id="outlined-search" label="Search field" type="search" />
                </div> */}

                <div>
                    <FormControl id="free-solo-2-demo">
                        {/* <FormLabel>Search input</FormLabel> */}
                        <Autocomplete
                            placeholder="Search anything"
                            type="search"
                            options={options}
                            freeSolo
                            onChange={handleOptionChange}
                            renderInput={(params) => (
                                <TextField {...params}
                                    id="outlined-search"
                                    label="Search anything"
                                    onChange={handleInputChange}
                                />
                            )}
                        />

                    </FormControl>

                </div>

                <div>
                    <Button
                        style={{ backgroundColor: '#ccc', color: '#000', borderRadius: '5px', padding: '10px 20px', fontWeight: "bold" }}
                        onClick={handleClick}
                        variant="contained"
                    // disableElevation
                    >Click Me</Button>
                </div>
            </Box>

            {/* <div>
                <Autocomplete
                    freeSolo
                    options={options}
                    renderInput={(params) => (
                        <TextField {...params} label="Autocomplete" variant="outlined" />
                    )}
                />
            </div> */}

            {/* <div>
                <Button
                    style={{ backgroundColor: '#ccc', color: '#000', borderRadius: '5px', padding: '10px 20px', fontWeight: "bold" }}
                    onClick={handleClick}
                    variant="contained"
                // disableElevation
                >Click Me</Button>

                <Button
                    style={{ marginLeft: "5px", backgroundColor: '#ccc', color: '#000', borderRadius: '5px', padding: '10px 20px', fontWeight: "bold" }}
                    onClick={handleClick}
                    variant="text"
                // href='/youtube.com'
                >Click me</Button>

                <Button
                    style={{ marginLeft: "5px", color: '#000', borderRadius: '5px', padding: '10px 20px', fontWeight: "bold" }}
                    onClick={handleClick}
                    variant="outlined"
                >Click me</Button>
            </div> */}
        </>
    )
}

export default Home