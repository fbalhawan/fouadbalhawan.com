"use client";
import { useIntl } from "react-intl";
import BrutalBtn from "./brutal-btn";
import Link from "next/link";

export default function Footer() {
  const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL;
  const intl = useIntl();
  return (
    <div className=" grid sm:grid-cols-3 justify-center my-10 sm:mt-20">
      <div className="my-0 inline-block text-center">
        <h3>Contact</h3>
        <Link href="mailto:hello@fouadbn.com">
          {process.env.NEXT_PUBLIC_EMAIL}
        </Link>
      </div>

      <div className="my-0 mt-5 lg:mt-0 inline-block text-center">
        <h3>Resume</h3>
        <BrutalBtn href={RESUME_URL} target="blank">
          Download My Resume
        </BrutalBtn>
      </div>
      <div className={`inline-block text-center mt-5 lg:mt-0`}>
        <h3>Social</h3>
        <Link href="https://github.com/fbalhawan" target="_blank">
          <i className="devicon-github-original text-6xl"></i>
        </Link>

        <Link href="https://www.linkedin.com/in/fuadb/" target="_blank">
          <i className="devicon-linkedin-plain text-6xl"></i>
        </Link>
      </div>
    </div>
  );
}
