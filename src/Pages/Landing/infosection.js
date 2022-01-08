import React from "react";
import {
  InfoSec,
  ForgetPass,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Cross,
  Input,
  Heading1,
  Button1,
  Account,
  FullName,
  Age,
  Input1,
  Button2,
  Button3,
  Container,
  Button,
} from "./infosection.element";

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  Loading,
}) {
  return (
    <>
      <div>
        <InfoSec
          lightBg={lightBg}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "100% 110%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Container>
            <InfoRow imgStart={imgStart}>
              <InfoColumn>
                <TextWrapper>
                  <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </Subtitle>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn></InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </div>
    </>
  );
}

export default InfoSection;
