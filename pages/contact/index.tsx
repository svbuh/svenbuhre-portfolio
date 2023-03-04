import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContactStore } from "../../store/ContactStore";

const Contact: NextPage = () => {
  const { emailAddress, setEmailAddress } = useContactStore();
  const { userMessage, setUserMessage } = useContactStore();
  const { agreeCheckbox, setAgreeCheckbox } = useContactStore();
  const [disabledCheckbox, setDisabledCheckbox] = useState(false);

  const emailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  function isValidEmail(): boolean {
    return emailRegex.test(emailAddress);
  }

  function isNonEmptyString(): boolean {
    return userMessage.trim().length > 0;
  }

  const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(event.target.value);
  };

  const handleUserMessageInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(event.target.value);
  };

  const handleAgreeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeCheckbox(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailAddress, userMessage }),
      });

      await response.json();
    } catch (error) {}
  };

  useEffect(() => {
    setDisabledCheckbox(isNonEmptyString() && isValidEmail() && agreeCheckbox ? false : true);
  }, [emailAddress, userMessage, agreeCheckbox]);

  return (
    <>
      <form className="max-w-2xl mx-auto gap-4 p-6" onSubmit={handleSubmit}>
        <div className="p-3">
          <div className="mb-2 block">
            <Label htmlFor="emailTextInput" value="Your E-Mail" />
          </div>
          <TextInput
            id="emailTextInput"
            type="email"
            placeholder="mail@example.com"
            required={true}
            shadow={true}
            onChange={handleEmailInputChange}
            value={emailAddress}
          />
        </div>
        <div id="textarea" className="p-3">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your Message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a message..."
            required={true}
            rows={4}
            onChange={handleUserMessageInputChange}
            value={userMessage}
          />
        </div>
        <div className="flex items-center gap-2 p-3">
          <Checkbox id="agree" required={true} onChange={handleAgreeCheckbox} checked={agreeCheckbox} />
          <Label htmlFor="agree">
            I agree with the{" "}
            <Link href="/termsAndConditions" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </Link>
          </Label>
        </div>
        <div className="p-3">
          <Button type="submit" disabled={disabledCheckbox}>
            Send Message
          </Button>
        </div>
      </form>
    </>
  );
};

export default Contact;
