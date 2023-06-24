import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Tooltip, Button, Select, TableCaption, TableContainer, Tfoot, Grid, GridItem, Stack, Skeleton, Icon } from "@chakra-ui/react";


const Student = () => {
    const [students, setStudentData] = useState([]);
    const [filter, setFilter] = useState("All");
    const [filteredStudents, setFilteredStudents] = useState([]);


    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        filterStudents();
    }, [students, filter]);

    const fetchStudents = async () => {
        try {
            const response = await fetch(`http://localhost:3001/student`);
            const data = await response.json();
            setStudentData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: "DELETE",
                header:  {
                    "Content-Type": "application/json",
                },
            });
            setStudentData(students.filter((student) => student.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const filterStudents = () => {
        if (filter === "All") {
            setFilteredStudents(students);
        } else {
            setFilteredStudents(students.filter((student) => student.faculty === filter));
        }
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };


    return (
        <div>
            <Grid
                templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
                gridTemplateRows={'50px 1fr 50px'}
                gridTemplateColumns={'0px'}
                h='200px'
                gap='0'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' area={'header'}>
                    <NavBar />
                </GridItem>

                <GridItem pl='2' area={'main'}>
                    <h2 fontSize="6xl">All Student</h2>
                    <Box justifySelf="flex-end">
                        <Select value={filter} onChange={handleFilterChange} data-testid="filter" alignSelf="flex-end">
                            <option value="All">All</option>
                            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                            <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                            <option value="Fakultas Teknik">Fakultas Teknik</option>
                            <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
                        </Select>
                    </Box>

                    <TableContainer className="test-table-container" data-testid="table-container" >
                        <Box overflowX="auto" flex="1">
                            {students.length > 0 ? (
                                <Table className="test-table" data-testid="table" variant="striped" colorScheme="teal">
                                    <TableCaption className="table-caption" data-testid="table-caption" placement="top">Student Data</TableCaption>
                                    <Thead className="test-thead" data-testid="thead">
                                        <Tr className="test-tr" data-testid="tr">
                                            <Th className="test-th" data-testid="th">No</Th>
                                            <Th className="test-th" data-testid="th">Fullname</Th>
                                            <Th className="test-th" data-testid="th">Birth Date</Th>
                                            <Th className="test-th" data-testid="th">Gender</Th>
                                            <Th className="test-th" data-testid="th">Program Study</Th>
                                            <Th className="test-th" data-testid="th">Faculty</Th>
                                            <Th className="test-th" data-testid="th">Option</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody className="test-tbody" data-testid="tbody">
                                        {filteredStudents.map((student, index) => (
                                            <Tr key={student.id} className="student-data-row" data-testid="tr">
                                                <Td className="test-td" data-testid="td">{index + 1}</Td>
                                                <Td className="test-td" data-testid="td">
                                                    <p><Link to={`/student/${student.id}`}><Tooltip label='Click to edit!'>{student.fullname}</Tooltip></Link></p>
                                                </Td>
                                                <Td className="test-td" data-testid="td">{student.birthDate}</Td>
                                                <Td className="test-td" data-testid="td">{student.gender}</Td>
                                                <Td className="test-td" data-testid="td">{student.programStudy}</Td>
                                                <Td className="test-td" data-testid="td">{student.faculty}</Td>
                                                <Td className="test-td" data-testid="td">
                                                    <Button onClick={() => deleteStudent(student.id)} data-testid={`delete-${student.id}`} className="delete-button" colorScheme="red" size="sm">Delete</Button>
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                    <Tfoot className="test-tfoot" data-testid="tfoot"></Tfoot>
                                </Table>

                            ) : (
                                <Stack>
                                    <p>Loading ...</p>
                                    <Skeleton height='100px' />
                                    <Skeleton height='100px' />
                                    <Skeleton height='100px' />
                                </Stack>
                            )}
                        </Box>
                    </TableContainer>
                </GridItem>
                <GridItem pl='2' area={'footer'}>
                    <Footer />
                </GridItem>
            </Grid>
        </div>
    );
};

export default Student;