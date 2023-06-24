import React from "react";
import { Button, Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Heading, Divider, ButtonGroup, Center, Box } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// TODO: answer here

const Home = () => {
    return <>
    <Box
    backgroundImage="https://www.akseleran.co.id/blog/wp-content/uploads/2020/09/Motivasi-Belajar.jpg"
    backgroundSize="cover"
    p={4}
  >

        <Center>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://cdn4.iconfinder.com/data/icons/education-business-part-1/513/17-1024.png'
                        alt='Mahasiswa'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' align="center">
                        <Heading size='md'>Student Portal</Heading>
                        <Text align="center">
                            Website ini berisikan data mahasiswa.
                        </Text>
                        <br></br>
                    </Stack>
                    <Center>
                        <Link to="/student">
                            <Button data-testid="student-btn" spacing='3'>
                                All Student
                            </Button>
                        </Link>
                    </Center>
                </CardBody>
            </Card>
        </Center>
        <br></br>
        <Footer />
        </Box>
    </>
};

export default Home;
