import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input, Alert, AlertIcon } from "@chakra-ui/react"
// TODO: answer here

const AddStudent = () => {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [programStudy, setProgramStudy] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        let faculty = "";
        switch (programStudy) {
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
        try {
            const response = await fetch(`http://localhost:3001/student`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    profilePicture,
                    address,
                    phoneNumber,
                    birthDate,
                    gender,
                    programStudy,
                    faculty,
                }),
            });
            await response.json();
            navigate("/student");
        } catch (error) {
            console.log(error);
        }
    };
    // TODO: answer here

    return (
        <>
            <div>
                <NavBar />
                <h1>Add Student</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Fullname:
                        <Input
                            type="text"
                            id="fullname"
                            value={fullname}
                            onChange={(event) => setFullname(event.target.value)}
                            data-testid="name"
                        />
                    </label>
                    <br />
                    <label>
                        Profil Picture:
                        <Input
                            img src=""
                            id="profilePicture"
                            value={profilePicture}
                            onChange={(event) => setProfilePicture(event.target.value)}
                            data-testid="profilePicture"
                        />
                    </label>
                    <br />
                    <label>
                        Address:
                        <Input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            data-testid="address"
                        />
                    </label>
                    <br />
                    <label>
                        Phone Number:
                        <Input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            data-testid="phoneNumber"
                        />
                    </label>
                    <br />
                    <label>
                        Birth Date:
                        <Input
                            type="date"
                            data-testid="date"
                            id="birthDate"
                            value={birthDate}
                            onChange={(event) => setBirthDate(event.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Gender:
                        <select
                            id="gender"
                            data-testid="gender"
                            value={gender}
                            onChange={(event) => setGender(event.target.value)}
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Program Study:
                        <select
                            id="programStudy"
                            data-testid="prody"
                            value={programStudy}
                            onChange={(event) => setProgramStudy(event.target.value)}
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
                    </label>
                    <br />
                    <Button type="submit" data-testid="add-btn" mt={4}
            colorScheme='teal'
           >
                        Add Student
                    </Button>
                </form>
                    
                <Footer />
            </div>
            {/* TODO: answer here */}
        </>
    );
};

export default AddStudent;
