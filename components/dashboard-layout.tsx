import { Avatar, Box, Container, Drawer, DrawerContent, DrawerOverlay, Flex, Heading, Icon, IconButton, Input, InputGroup, InputLeftElement, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { BsGearFill } from 'react-icons/bs'
import { FaBell, FaClipboardCheck, FaRss } from 'react-icons/fa'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { HiCode, HiCollection } from 'react-icons/hi'
import { AiFillGift } from 'react-icons/ai'
import { MdHome } from 'react-icons/md'
import { SiChakraui } from 'react-icons/si'
import Footer from './footer'
import Link from 'next/link'


interface Props {

}

const NavItem = (props) => {
    const { icon, children, link, ...rest } = props;
    return (
        <>
            <Link href={link || '/'}>

                <Flex
                    align="center"
                    px="4"
                    mx="2"
                    rounded="md"
                    py="3"
                    cursor="pointer"
                    color="whiteAlpha.700"
                    _hover={{
                        bg: "blackAlpha.300",
                        color: "whiteAlpha.900",
                    }}
                    role="group"
                    fontWeight="semibold"
                    transition=".15s ease"
                    {...rest}
                >
                    {icon && (
                        <Icon
                            mr="2"
                            boxSize="4"
                            _groupHover={{
                                color: "gray.300",
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Link>

        </>
    );
};

const SidebarContent = (props) => (
    <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg="brand.600"
        borderColor="blackAlpha.300"
        borderRightWidth="1px"
        w="60"
        {...props}
    >
        <Flex px="4" py="5" align="center">
            <SiChakraui color='white' fontSize={48} />
            <Text fontSize="2xl" ml="2" color="white" fontWeight="semibold">
                Nextjs Dash Template
            </Text>
        </Flex>
        <Flex
            direction="column"
            as="nav"
            fontSize="sm"
            color="gray.600"
            aria-label="Main Navigation"
        >
            <NavItem icon={MdHome}>Home</NavItem>
            <NavItem icon={FaRss}>Articles</NavItem>
            <NavItem icon={HiCollection}>Collections</NavItem>
            <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
            <NavItem icon={HiCode}>Integrations</NavItem>
            <NavItem icon={AiFillGift}>Changelog</NavItem>
            <NavItem link='/dashboard/account' icon={BsGearFill}>Settings</NavItem>
        </Flex>
    </Box>
);
export default function DashboardLayout({ children }: any): ReactElement {
    const sidebar = useDisclosure();



    return (
        <>
            <Box
                as="section"
                bg={useColorModeValue("gray.50", "gray.700")}
                minH="100vh"
            >
                <SidebarContent display={{ base: "none", md: "unset" }} />
                <Drawer
                    isOpen={sidebar.isOpen}
                    onClose={sidebar.onClose}
                    placement="left"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <SidebarContent w="full" borderRight="none" />
                    </DrawerContent>
                </Drawer>
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Flex
                        as="header"
                        align="center"
                        justify="space-between"
                        w="full"
                        px="4"
                        bg={useColorModeValue("white", "gray.800")}
                        borderBottomWidth="1px"
                        borderColor="blackAlpha.300"
                        h="14"
                    >
                        <IconButton
                            aria-label="Menu"
                            display={{ base: "inline-flex", md: "none" }}
                            onClick={sidebar.onOpen}
                            icon={<FiMenu />}
                            size="sm"
                        />
                        <InputGroup w="96" display={{ base: "none", md: "flex" }}>
                            <InputLeftElement color="gray.500" children={<FiSearch />} />
                            <Input placeholder="Search for articles..." />
                        </InputGroup>

                        <Flex align="center">
                            <Icon color="gray.500" as={FaBell} cursor="pointer" />
                            <Avatar
                                ml="4"
                                size="sm"
                                name="anubra266"
                                src="https://fernandobelotto.com/fernando.png"
                                cursor="pointer"
                            />
                        </Flex>
                    </Flex>

                    <Box as="main" p="4">
                        {/* <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="100vh"> */}
                        {children}
                        {/* </Box> */}
                        <Footer />
                    </Box>
                </Box>
            </Box>




        </>
    )
}
