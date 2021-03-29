import React from 'react';
import { Container , Title, SubTitle } from './styles';


const Feature = ({children , ...props}) => {
    return (
        <Container {...props}>
            {children}
        </Container>
    );
}

Feature.Title = function FeatureTitle({children , ...props}) {
return <Title {...props}>
    {children}
</Title>
}

Feature.SubTitle = function FeatureSubTitle({children , ...props}) {
    return <SubTitle {...props}>
        {children}
    </SubTitle>
    }

export default Feature;
