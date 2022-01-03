import { Container, FormControl, FormLabel, Input, Button, Text, Link, Flex, Heading, Stack, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

interface Props {

}

export default function Password({ }: Props): ReactElement {
    const router = useRouter()
    function handleReset() {
        router.push('/password-reset')
    }

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Forgot your password?
                    </Heading>
                    <Text
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={'gray.800'}>
                        You&apos;ll get an email with a reset link
                    </Text>
                    <FormControl id="email">
                        <Input
                            placeholder="your-email@example.com"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            colorScheme={'brand'}
                            onClick={handleReset}
                        >
                            Request Reset
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            {/* <Container>
                <form>
                    <FormControl>
                        <FormLabel htmlFor='email'>Email address</FormLabel>
                        <Input id='email' type='email' />
                    </FormControl>
                    <Button type='submit'>Recover password</Button>
                    <br />
                    <NextLink href='/login' >
                        Login
                    </NextLink>

                </form>
            </Container> */}
        </>
    )
}