import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Box, Badge } from "@chakra-ui/react"
// TODO: answer here

const EditStudent = () => {
    const navigate = useNavigate();;
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [students, setStudentData] = useState(true);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/student/${id}`);
                const data = await response.json();
                setStudentData(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                // setLoading(false);
            }
        };
        fetchStudentData();
    }, [id]);

    useEffect(() => {
        let faculty = "";
        switch (students.programStudy) {
            case "Ekonomi":
            case "Manajemen":
            case "Akuntasi":
                faculty = "Fakultas Ekonomi";
                break;
            case "Administrasi Publik":
            case "Administrasi Bisnis":
            case "Hubungan Internasional":
                faculty = "Fakultas Ilmu Sosial dan Politik";
                break;
            case "Teknik Sipil":
            case "Arsitektur":
                faculty = "Fakultas Teknik";
                break;
            case "Matematika":
            case "Fisika":
            case "Informatika":
                faculty = "Fakultas Teknologi Informasi dan Sains";
                break;
            default:
                faculty = "";
        }
        // console.log(faculty)
        setStudentData({ ...students, faculty: faculty })
    }, [students.programStudy])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(students.programStudy)

        console.log(students.faculty)
        try {
            const response = await fetch(`http://localhost:3001/student/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(students),
            });
            await response.json();
            navigate("/student");
        } catch (error) {
            console.log(error);
        }
    };
    const { fullname, profilePicture, address, phoneNumber, birthDate, gender, programStudy } = students;

    // TODO: answer here

    return (
        <>
            <div>
                <NavBar />
                    <Box classname="footer" display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            <h1>Edit Student</h1>
                        </Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                        </Box>
                    </Box>
                    {loading ? (<p>Loading ...</p>) : (
                        <>

                            <img src={profilePicture} alt="Profile Picture" />
                            <form onSubmit={handleSubmit}>


                                <label>Full Name:</label>
                                <Input
                                    data-testid="name"
                                    type="text"
                                    id="fullname"
                                    value={fullname}
                                    onChange={(event) => setStudentData({ ...students, fullname: event.target.value })}
                                />

                                <label>Address:</label>
                                <Input
                                    data-testid="address"
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(event) => setStudentData({ ...students, address: event.target.value })}
                                />

                                <label>Phone Number:</label>
                                <Input
                                    data-testid="phoneNumber"
                                    type="text"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(event) => setStudentData({ ...students, phoneNumber: event.target.value })}
                                />

                                <label>Birth Date:</label>
                                <Input

                                    type="date"
                                    data-testid="date"
                                    id="birthDate"
                                    value={birthDate}
                                    onChange={(event) => setStudentData({ ...students, birthDate: event.target.value })}
                                />

                                <label>Gender:</label>
                                <select
                                    data-testid="gender"
                                    id="gender"
                                    value={gender}
                                    onChange={(event) => setStudentData({ ...students, gender: event.target.value })}
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>

                                <label>Program Study:</label>
                                <select
                                    data-testid="prody"
                                    type="text"
                                    id="prody"
                                    value={programStudy}
                                    onChange={(event) => setStudentData({ ...students, programStudy: event.target.value })}
                                >
                                    <option>Ekonomi</option>
                                    <option>Manajemen</option>
                                    <option>Akuntansi</option>
                                    <option>Administrasi Publik</option>
                                    <option>Administrasi Bisnis</option>
                                    <option>Hubungan Internasional</option>
                                    <option>Teknik Sipil</option>
                                    <option>Arsitektur</option>
                                    <option>Matematika</option>
                                    <option>Fisika</option>
                                    <option>Informatika</option>
                                </select>

                                <Button type="submit" data-testid="edit-btn">
                                    Edit Student
                                </Button>
                            </form>
                        </>
                    )}
                    <Footer />
            </div>
            {/* TODO: answer here */}
        </>
    );
};

export default EditStudent;
