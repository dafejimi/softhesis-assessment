import { Heading, Text, Img } from "./../..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userText?: string;
  userCount?: string;
}

export default function UserProfile({
  userImage = "img_close.svg",
  userText = "Users",
  userCount = "2,453",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start w-[22%] md:w-full gap-2.5 px-[30px] py-5 sm:px-5 border-indigo-800_0f border border-solid bg-white-a700 shadow-sm rounded`}
    >
      <Img src={userImage} width={40} height={40} alt="Close Icon" className="h-[40px] w-[40px]" />
      <Text size="texts" as="p" className="!font-medium uppercase">
        {userText}
      </Text>
      <Heading size="headings" as="h4" className="mb-1 uppercase !text-indigo-800">
        {userCount}
      </Heading>
    </div>
  );
}
