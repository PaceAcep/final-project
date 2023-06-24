import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Box, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Stack } from "@chakra-ui/react";


// TODO: answer here

const NavBar = () => {
    return (
        <>
        <Stack direction='row' spacing={4} align='center'>
                    <Button variant='ghost' as={Link} to="/" data-testid="home-page" class="test-link">Home</Button>
                    <Button variant='ghost'as={Link} to="/student" data-testid="student-page" class="test-link">All Student</Button>
                    <Button variant='ghost'as={Link} to="/add" data-testid="add-page" class="test-link">Add Student</Button>
        </Stack>
        </>
    );
};

export default NavBar;
