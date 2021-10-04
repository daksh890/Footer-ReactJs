import React from "react";
import Footer from '../components/footer';
import Icon from "../components/footer/icons";

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Coloumn>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>      
                    </Footer.Coloumn>
                    
                    <Footer.Coloumn>
                        <Footer.Title>Mission</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>      
                    </Footer.Coloumn>

                    <Footer.Coloumn>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className ="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className ="fab fa-linkedin" />Linkedin</Footer.Link>
                        <Footer.Link href="#"><Icon className ="fab fa-twitter-square" />Twitter</Footer.Link>
                        <Footer.Link href="#"><Icon className ="fab fa-facebook-f" />Facebook</Footer.Link>      
                    </Footer.Coloumn>
                </Footer.Row>    
            </Footer.Wrapper>
        </Footer>

    )
}