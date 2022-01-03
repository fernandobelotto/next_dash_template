import { Link, FormControl, FormLabel, Input, FormHelperText, Container, Button, Heading, Box, Checkbox, Flex, Stack, Image } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

export default function Login({ }: {}): ReactElement {
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault()
        router.push('/home')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                    <Flex p={8} flex={0.4} align={'center'} justify={'center'}>
                        <Stack spacing={4} w={'full'} maxW={'md'}>
                            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input colorScheme={'brand'} type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input colorScheme={'brand'} type="password" />
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox colorScheme={'brand'}> Remember me</Checkbox>
                                    <NextLink href='/password' passHref>
                                        <Link color={'brand.500'}>Forgot password?</Link>
                                    </NextLink>
                                </Stack>
                                <Button colorScheme={'brand'} variant={'solid'} type='submit'>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={'Login Image'}
                            objectFit={'fill'}
                            src={
                                'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80'
                            }
                        />
                    </Flex>
                </Stack>
            </form>

            {/* <Container>
                <Box h='100vh' display='flex' flexDir='column' justifyContent='center' >

                    <Heading mb='5'>Login Page</Heading>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel htmlFor='email'>Email address</FormLabel>
                            <Input id='email' type='email' />
                        </FormControl>
                        <FormControl mt='5'>
                            <FormLabel htmlFor='email'>Password</FormLabel>
                            <Input id='email' type='password' />
                        </FormControl>
                        <Button mb='5' mt='5' type='submit'>Submit</Button>
                        <br />
                        <Link href='/password'>recover password</Link>
                    </form>
                </Box>

            </Container> */}
        </>
    )
}
