import type { NextPage } from "next";

const TermsAndConditions: NextPage = () => {
  return (
    <>
      <div className="dark:text-white p-6 max-w-2xl mx-auto">
        <p>By sending us a message with your email address, you agree to the following terms and conditions:</p>
        <br />
        <ol>
          <li>
            <strong>Data Protection:</strong>
            <br /> We will use your personal data, including your email address, only for the purpose of processing your
            inquiry or request.
          </li>
          <li>
            <strong>Data Retention:</strong>
            <br /> We will retain your personal data for as long as it is necessary to fulfill the purpose for which it
            was collected or as required by law.
          </li>
          <li>
            <strong>Data Sharing:</strong>
            <br /> We will not share your personal data with any third parties without your explicit consent, except
            where required by law or where necessary for the performance of our contractual obligations to you.
          </li>
          <li>
            <strong>Data Security:</strong>
            <br /> We take appropriate technical and organizational measures to protect your personal data against
            unauthorized access, alteration, disclosure, or destruction.
          </li>
          <li>
            <strong>Your Rights:</strong>
            <br /> You have the right to request access to, correction or deletion of your personal data, as well as the
            right to object to the processing of your personal data or to request its restriction.
          </li>
        </ol>
        <br />
        <p>
          If you have any questions or concerns regarding our data protection practices, please contact us at
          info[at]svenbuhre[dot]de.
        </p>
        <br />
        <p>
          By sending us a message with your email address, you confirm that you have read and understood our terms and
          conditions and agree to our data protection practices as described above.
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
