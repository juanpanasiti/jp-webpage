import React from 'react'
import { FakePageContainer } from '../components/common/styledComponets'
import { AboutMe } from '../components/contact/AboutMe'
import { HowToContactMe } from '../components/contact/HowToContactMe'

export const Contact = () => {
    return (
        <FakePageContainer>
            <AboutMe />
            <HowToContactMe />
        </FakePageContainer>
    )
}
