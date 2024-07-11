"use client";

import { useRouter } from "next/navigation";
import { CloseSVG } from "../../../assets/images";
import { SelectBox, Img, Text, Input } from "./../../";
import Link from "next/link";
import React from "react";

const dropDownOptions = [
  { label: "Details", value: "details" },
  { label: "Logout", value: "logout" },
];
interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const router = useRouter()

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center p-[26px] sm:p-5 bg-white-a700 shadow-xs`}
    >
      <div className="mx-auto flex w-full max-w-[1350px] items-center justify-between gap-5 md:flex-col">
        <Img
          src="default-monochrome.svg"
          width={144}
          height={30}
          alt="Header Logo"
          className="h-[30px] w-[144px] object-contain"
        />
        <div className="flex w-[76%] items-center justify-between gap-5 md:w-full md:flex-col">
          <Input
            name="Search Field"
            placeholder={`Search for anything`}
            value={searchBarValue}
            onChange={(e) => setSearchBarValue(e.target.value)}
            suffix={
              <div className="flex h-[40px] w-[56px] items-center justify-center rounded-bl-[0px] rounded-br-[50%] rounded-tl-[0px] rounded-tr-[50%] bg-cyan-400">
                {searchBarValue?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue("")} height={14} width={12} />
                ) : (
                  <Img
                    src="img_search.svg"
                    width={12}
                    height={14}
                    alt="Search"
                    className="h-[14px] w-[12px] cursor-pointer"
                  />
                )}
              </div>
            }
            className="w-[38%]"
          />
          <div className="flex w-[26%] items-center justify-center md:w-full">
            <Text as="p" className="mb-2.5 self-end !font-roboto !text-indigo-800 underline" >
              <Link href="/user-details" >Profile</Link>
            </Text>
            <Link href="#">
              <Img
                src="img_np_notification.svg"
                width={26}
                height={26}
                alt="Notification Icon"
                className="ml-[46px] h-[26px] w-[26px]"
              />
            </Link>
            <div className="ml-[30px] flex flex-1 items-center justify-center gap-2.5">
              <Link href="#">
                <Img
                  src="img_image_4.png"
                  width={48}
                  height={48}
                  alt="Profile Icon"
                  className="h-[48px] px-25px w-[48px] rounded-[24px] object-cover"
                />
              </Link>
              <SelectBox
                shape="square"
                indicator={
                  <Img
                    src="img_npdropdown615120000000_1.svg"
                    width={20}
                    height={20}
                    alt="Np Dropdown 615120 000000 1"
                    className="h-[20px] w-[20px]"
                  />
                }
                name="Company Dropdown"
                placeholder={`Adedeji`}
                options={dropDownOptions}
                className="mb-2.5 flex-grow self-end font-medium text-indigo-800 sm:pr-5"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
