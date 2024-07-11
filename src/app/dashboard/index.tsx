"use client";

import { userData, UserRowType } from "@/constants/data";
import { Img, Text, Heading } from "../../components";
import Header from "../../components/organisms/Header";
// import PaginationComponent from "../../components/organisms/PaginationComponent";
import { ReactTable } from "../../components/organisms/ReactTable";
import Sidebar1 from "../../components/organisms/Sidebar1";
import UserProfile from "../../components/molecules/UserProfile";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense } from "react";

const dashboardStatsList = [
  { userImage: "img_close.svg", userText: "Total Users", userCount: "117,253" },
  { userImage: "img_close_deep_purple_a400.svg", userText: "Suspended Users", userCount: "2,453" },
  { userImage: "img_play.svg", userText: "Inactive Users", userCount: "12,453" },
  { userImage: "img_user_pink_a200.svg", userText: "Active Users", userCount: "102,453" },
];

export default function DashboardPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<UserRowType>();
    return [
      tableColumnHelper.accessor("username", {
        cell: (info) => (
          <div className="flex">
            <Text size="texts" as="p">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div
            className="flex cursor-pointer items-center gap-2.5"
            onClick={info?.header?.column?.getToggleSortingHandler()}
          >
            <Heading as="h2" className="uppercase">
              USERNAME
            </Heading>
            <Img
              src="img_filter_results_button.svg"
              width={16}
              height={16}
              alt="Organization Sort"
              className="h-[16px] w-[16px]"
            />
          </div>
        ),
        meta: { width: "150px" },
      }),
      tableColumnHelper.accessor("email", {
        cell: (info) => (
          <div className="flex">
            <Text size="texts" as="p">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div
            className="flex cursor-pointer items-center gap-2.5"
            onClick={info?.header?.column?.getToggleSortingHandler()}
          >
            <Heading as="h3" className="uppercase">
              EMAIL
            </Heading>
            <Img
              src="img_filter_results_button.svg"
              width={16}
              height={16}
              alt="Username Sort"
              className="h-[16px] w-[16px]"
            />
          </div>
        ),
        meta: { width: "140px" },
      }),
      tableColumnHelper.accessor("phone", {
        cell: (info) => (
          <div className="flex flex-1 md:self-stretch">
            <Text size="texts" as="p">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div
            className="flex cursor-pointer items-center gap-2.5"
            onClick={info?.header?.column?.getToggleSortingHandler()}
          >
            <Heading as="h4" className="uppercase">
              PHONE
            </Heading>
            <Img
              src="img_filter_results_button.svg"
              width={16}
              height={16}
              alt="Email Sort"
              className="h-[16px] w-[16px]"
            />
          </div>
        ),
        meta: { width: "182px" },
      }),
      tableColumnHelper.accessor("organization", {
        cell: (info) => (
          <div className="flex">
            <Text size="texts" as="p">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div
            className="flex cursor-pointer items-center gap-2.5"
            onClick={info?.header?.column?.getToggleSortingHandler()}
          >
            <Heading as="h5" className="uppercase">
              ORGANIZATION
            </Heading>
            <Img
              src="img_filter_results_button.svg"
              width={16}
              height={16}
              alt="Phone Sort"
              className="h-[16px] w-[16px]"
            />
          </div>
        ),
        meta: { width: "158px" },
      }),
      tableColumnHelper.accessor("date_joined", {
        cell: (info) => (
          <div className="flex flex-1 md:self-stretch">
            <Text size="texts" as="p">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div
            className="flex cursor-pointer items-center gap-[11px]"
            onClick={info?.header?.column?.getToggleSortingHandler()}
          >
            <Heading as="h6" className="uppercase">
              DATE JOINED
            </Heading>
            <Img
              src="img_filter_results_button.svg"
              width={16}
              height={16}
              alt="Date Joined Sort"
              className="h-[16px] w-[16px]"
            />
          </div>
        ),
        meta: { width: "188px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
            <Text
              size="texts"
              as="p"
              className="flex items-center justify-center rounded-[14px] bg-blue_gray-600_0f px-3 py-1.5"
            >
              {info?.getValue?.()}
            </Text>
            <Img
              src="img_ic_more_vert_18px.svg"
              width={20}
              height={20}
              alt="Status More"
              className="mr-[30px] h-[20px] w-[20px]"
            />
          </div>
        ),
        header: (info) => (
          <div
            className="flex cursor-pointer items-center gap-[11px]"
            onClick={info?.header?.column?.getToggleSortingHandler()}
          >
            <Heading as="p" className="uppercase">
              STATUS
            </Heading>
            <Img
              src="img_filter_results_button.svg"
              width={16}
              height={16}
              alt="Status Sort"
              className="h-[16px] w-[16px]"
            />
          </div>
        ),
        meta: { width: "184px" },
      }),
    ];
  }, []);

  return (
    <div className="w-full bg-gray-50">
      <div>
        {/* top navigation section */}
        <Header />
        <div className="mr-[60px] flex items-start md:mr-0">
          {/* sidebar navigation section */}
          <Sidebar1 />

          {/* main content section */}
          <div className="mt-14 flex flex-1 flex-col items-end gap-10">
            <div className="flex w-[94%] flex-col items-start gap-9 md:w-full md:p-5">
              {/* user summary section */}
              <Heading size="text2xl" as="h1" className="!text-indigo-800">
                Users
              </Heading>
              <div className="flex gap-[26px] self-stretch md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {dashboardStatsList.map((d, index) => (
                    <UserProfile {...d} key={"dashboardList" + index} />
                  ))}
                </Suspense>
              </div>
            </div>
            <div className="flex flex-col items-end gap-5 self-stretch">
              {/* user table section */}
              <ReactTable
                bodyProps={{ className: "" }}
                headerProps={{ className: "md:flex-col" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="md:whitespace-no-wrap w-[94%] rounded border border-solid border-indigo-800_0f bg-white-a700 p-[30px] shadow-sm md:block md:overflow-x-auto sm:p-5"
                columns={tableColumns}
                data={userData}
              />

              {/* pagination section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
