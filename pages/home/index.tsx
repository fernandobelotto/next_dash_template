import { Heading } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import DashboardLayout from '../../components/dashboard-layout'

interface Props {

}

export default function Home({ }: Props): ReactElement {
    return (
        <>
            <DashboardLayout>
                <Heading>Olá home</Heading>
            </DashboardLayout>

        </>
    )
}
