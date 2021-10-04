import React from "react";
import{ Container, Wrapper, Row, Coloumn, Link, Title} from "./styles/footer";

export default function Footer ({children, ...restProps})
{
    return<Container {...restProps}>{children}</Container>  
}

Footer.Wrapper = function FooterWrapper ({children, restProps}){
    return<Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow ({children, restProps}){
    return<Row {...restProps}>{children}</Row>
}

Footer.Coloumn = function FooterColoumn ({children, restProps}){
    return<Coloumn {...restProps}>{children}</Coloumn>
}

Footer.Link = function FooterLink ({children, restProps}){
    return<Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle ({children, restProps}){
    return<Title {...restProps}>{children}</Title>
}