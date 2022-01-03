import { Flex, useColorModeValue, Stack, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

interface Props {

}

export default function PasswordReset({ }: Props): ReactElement {
    const route = useRouter()
    function handleSubmit(e) {
        e.preventDefault()
        route.push('/')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={'gray.50'}>
                    <Stack
                        spacing={4}
                        w={'full'}
                        maxW={'md'}
                        bg={'white'}
                        rounded={'xl'}
                        boxShadow={'lg'}
                        p={6}
                        my={12}>
                        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                            Enter new password
                        </Heading>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                placeholder="your-email@example.com"
                                _placeholder={{ color: 'gray.500' }}
                                type="email"
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <FormControl id="code" isRequired>
                            <FormLabel>Code</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <Stack spacing={6}>
                            <Button
                                colorScheme={'teal'}
                                type='submit'
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Flex>
            </form>

        </>
    )
}
