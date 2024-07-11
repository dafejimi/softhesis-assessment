import { Img, Text, Button } from "./..";
import React from "react";

interface Props {
  className?: string;
  showingText?: string;
  dropdownButton?: string;
  outOfText?: string;
  pageNumberOne?: string;
  pageNumberTwo?: string;
  pageNumberThree?: string;
  ellipsis?: string;
  pageNumberFifteen?: string;
  pageNumberSixteen?: string;
}

export default function PaginationComponent({
  showingText = "Showing",
  dropdownButton = "100",
  outOfText = "out of 100",
  pageNumberOne = "1",
  pageNumberTwo = "2",
  pageNumberThree = "3",
  ellipsis = "...",
  pageNumberFifteen = "15",
  pageNumberSixteen = "16",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex md:flex-col self-stretch justify-end items-center`}>
      <div className="flex w-full items-center justify-center px-14">
        <Text size="texts" as="p" className="self-end">
          {showingText}
        </Text>
        <div className="flex flex-1 items-center gap-2.5 px-2.5">
          <Button
            size="xs"
            rightIcon={
              <Img src="img_arrow_down.svg" width={14} height={14} alt="Arrow Down" className="h-[14px] w-[14px]" />
            }
            className="min-w-[80px] gap-[18px] rounded font-medium"
          >
            {dropdownButton}
          </Button>
          <Text size="texts" as="p">
            {outOfText}
          </Text>
        </div>
      </div>
      <div className="flex w-full items-center justify-end">
        <Img src="img_arrow_left.svg" width={24} height={24} alt="Previous Arrow" className="h-[24px] w-[24px]" />
        <Text as="p" className="ml-5 !font-medium">
          {pageNumberOne}
        </Text>
        <Text as="p" className="ml-5 !text-blue_gray-600_99">
          {pageNumberTwo}
        </Text>
        <Text as="p" className="ml-5 !text-blue_gray-600_99">
          {pageNumberThree}
        </Text>
        <Text as="p" className="ml-5 !text-blue_gray-600_99">
          {ellipsis}
        </Text>
        <Text as="p" className="ml-5 !text-blue_gray-600_99">
          {pageNumberFifteen}
        </Text>
        <Text as="p" className="ml-5 !text-blue_gray-600_99">
          {pageNumberSixteen}
        </Text>
        <Img src="img_arrow_right.svg" width={24} height={24} alt="Next Arrow" className="ml-5 h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
