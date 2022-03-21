import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
// import { 
//     FaFacebook,
//     FaInstagram,
//     FaYoutube,
//     FaLinkedin,
//     FaGithub
// } from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    WebsiteRights
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/singin">How it Works</FooterLink>
                        <FooterLink to="/singin">Testimonials</FooterLink>
                        <FooterLink to="/singin">Carrers</FooterLink>
                        <FooterLink to="/singin">Investors</FooterLink>
                        <FooterLink to="/singin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="/singin">Contact</FooterLink>
                        <FooterLink to="/singin">Support</FooterLink>
                        <FooterLink to="/singin">Destinations</FooterLink>
                        <FooterLink to="/singin">Sponsorships</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/singin">Submit Video</FooterLink>
                        <FooterLink to="/singin">Ambassadors</FooterLink>
                        <FooterLink to="/singin">Agency</FooterLink>
                        <FooterLink to="/singin">Influencer</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/singin">Facebook</FooterLink>
                        <FooterLink to="/singin">Instagram</FooterLink>
                        <FooterLink to="/singin">Youtube</FooterLink>
                        <FooterLink to="/singin">Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                    <WebsiteRights>Xbstrxct © {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/_danielvillacis" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Github"><FaGithub /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer