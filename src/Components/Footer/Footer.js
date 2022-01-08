import React from "react";
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  SocialMedia,
  SocialLogo,
  SocialMediaWrap,
  SocialIcon,
  WebsiteRights,
  Button,
} from "./Footer.element";

import { SiYourtraveldottv } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Get Bang The Subscribe Button Below To Recieve Our Latest Updates
            and Trends.
          </FooterSubHeading>
          <FooterSubText>You Can Unsubscribe At Any Time.</FooterSubText>
          <Form>
            <FormInput name="email" placeholder="You Email Here" type="email" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>EXPLORA © 2022</WebsiteRights>
            <SocialLogo to="/">
              <SiYourtraveldottv />
              EXPLORA
            </SocialLogo>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
