import React from "react";
import { Container } from "../../components/reuseable";
import {
  Btn,
  ContactSection,
  ContactWrapper,
  Heading,
  InputWrapper,
  MessageStyle,
} from "./styles";

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <ContactWrapper>
          <Heading>
            <h1>Feel Free Contact</h1>
            <h1>Us Now</h1>
          </Heading>
          <form>
            <InputWrapper>
              <input
                placeholder="Name"
                name="name"
                type="text"
                required
                //   value={formInfo[name]}
                //   onChange={onChange}
              />
              <input
                placeholder="Email"
                name="email"
                type="email"
                required
                //   value={formInfo[name]}
                //   onChange={onChange}
              />
              <input
                placeholder="Phone"
                name="phone"
                type="phone"
                required
                //   value={formInfo[name]}
                //   onChange={onChange}
              />
              <input
                placeholder="Website"
                name="website"
                type="text"
                required
                //   value={formInfo[input.name]}
                //   onChange={onChange}
              />
            </InputWrapper>
            <MessageStyle>
              <textarea
                rows={10}
                id="message"
                name="message"
                placeholder="Write your notes or questions here"
                // value={formInfo.message}
                // onChange={onChange}
                required
              />
            </MessageStyle>
            <Btn type="submit">Submit</Btn>
          </form>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
