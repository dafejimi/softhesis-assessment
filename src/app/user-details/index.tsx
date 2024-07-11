"use client";

import { useRouter } from "next/navigation";
import { Text, Heading, Img, Button, ContextMenu } from "../../components";
import Header from "../../components/organisms/Header";
import Sidebar1 from "../../components/organisms/Sidebar1";
import React, { useRef, useState } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function UsersgeneraldetailsPage() {
  const [showUpadateModal, setShowUpadateModal] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter()

  const closeContextMenu = () => {
    setShowUpadateModal(false);
  };

  return (
    <>
      {/* main container section */}
      <div className="w-full bg-gray-50">
        <div>
          {/* header section */}
          <Header />
          <div className="mr-[60px] flex items-start md:mr-0">
            {/* sidebar navigation section */}
            <div><Sidebar1 /></div>
            <Tabs
              className="mt-[60px] flex flex-1 flex-col gap-7"
              selectedTabClassName="!text-cyan-400"
              selectedTabPanelClassName="p-[30px] sm:p-5 relative tab-panel--selected"
            >
              {/* content area section */}
              <div className="flex flex-col items-end gap-10">
                {/* user navigation tabs section */}
                <div className="flex justify-center self-stretch">
                  <div className="flex w-[94%] flex-col gap-5 md:w-full md:p-5">
                    <div className="flex items-center gap-[13px]">
                      <Img
                        style={{cursor: "pointer"}}
                        src="img_np_back_3007750_000000.svg"
                        width={30}
                        height={30}
                        alt="Back Icon"
                        className="h-[30px] w-[30px]"
                        onClick={() => router.push('/dashboard')}
                      />
                      <Text as="p">Back to Users</Text>
                    </div>
                    <div className="flex items-center justify-center sm:flex-col">
                      <Heading size="text2xl" as="h1" className="!text-indigo-800">
                        User Details
                      </Heading>
                      <div className="flex flex-1 justify-end gap-5 sm:self-stretch">
                        <Button
                          variant="outline"
                          shape="round"
                          color="undefined_undefined"
                          className="min-w-[170px] font-semibold uppercase tracking-[1.40px]"
                        >
                          Blacklist User
                        </Button>
                        <Button
                          variant="outline"
                          shape="round"
                          color="undefined_undefined"
                          className="min-w-[170px] font-semibold uppercase tracking-[1.40px] sm:px-5"
                        >
                          Activate User
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* user details section */}
                <div className="flex w-[94%] flex-col gap-12 rounded border border-solid border-indigo-800_0f bg-white-a700 px-[30px] shadow-sm md:w-full sm:px-5">
                  <div className="mt-[30px] flex items-center justify-center sm:flex-col">
                    <div className="flex flex-col items-center rounded-[50px] bg-indigo-800_28 p-[30px] sm:p-5">
                      <Img
                        src="img_np_user_948637_000000.svg"
                        width={40}
                        height={40}
                        alt="User Image"
                        className="h-[40px] w-[40px]"
                      />
                    </div>
                    <div className="ml-5 flex flex-1 flex-col items-start gap-1.5 sm:ml-0 sm:self-stretch">
                      <Heading size="textxl" as="h2" className="!text-indigo-800">
                        Grace Effiom
                      </Heading>
                      <Text size="texts" as="p">
                        LSQFf587g90
                      </Text>
                    </div>
                    <div className="ml-2.5 flex flex-1 items-center justify-between gap-5 px-2 sm:ml-0 sm:self-stretch">
                      <div className="ml-1.5 h-full w-px bg-blue_gray-600_33 md:ml-0" />
                      <div className="flex w-[54%] flex-col items-center gap-2">
                        <Text size="texts" as="p" className="!font-medium">
                          User’s Tier
                        </Text>
                        <div className="flex self-stretch">
                          <Img
                            src="img_np_star_1208084_000000.svg"
                            width={16}
                            height={16}
                            alt="First Star"
                            className="h-[16px] w-[16px]"
                          />
                          <Img
                            src="img_np_star_1171151_000000.svg"
                            width={16}
                            height={16}
                            alt="Second Star"
                            className="h-[16px] w-[16px]"
                          />
                          <Img
                            src="img_np_star_1171151_000000.svg"
                            width={16}
                            height={16}
                            alt="Third Star"
                            className="h-[16px] w-[16px]"
                          />
                        </div>
                      </div>
                      <div className="h-full w-px bg-blue_gray-600_33" />
                    </div>
                    <div className="ml-5 flex flex-col items-start gap-0.5 sm:ml-0">
                      <Button ref={buttonRef} onClick={() => setShowUpadateModal((prevState) => !prevState)} className=" bg-[#1a94b8] w-[150px]">Update User</Button>
                      <ContextMenu visible={showUpadateModal} closeMenu={closeContextMenu} buttonRef={buttonRef} />
                    </div>
                  </div>
                  <div className="mx-1.5 flex items-start justify-center md:mx-0 md:flex-col">
                    <TabList className="flex flex-wrap items-start gap-[86px] self-center px-6 md:gap-5 sm:px-5">
                      <Tab className="font-sfcompacttext text-base font-normal text-black-900_cc">General Details</Tab>
                      <Tab className="mb-2 font-sfcompacttext text-base font-normal text-black-900_cc">Documents</Tab>
                      <Tab className="font-sfcompacttext text-base font-normal text-black-900_cc">Bank Details</Tab>
                      <Tab className="font-sfcompacttext text-base font-normal text-black-900_cc">Loans</Tab>
                      <Tab className="mr-[54px] font-sfcompacttext text-base font-normal text-black-900_cc">
                        Savings
                      </Tab>
                    </TabList>
                    <Text as="p" className="!font-sfcompacttext !text-black-900_cc">
                      App and System
                    </Text>
                  </div>
                </div>
              </div>
              <div>
                {[...Array(5)].map((_, index) => (
                  <TabPanel key={`tab-panel${index}`} className="absolute flex flex-col items-end p-[30px] sm:p-5">
                    <div className="flex w-full flex-col items-end">
                      <div className="mb-4 w-[94%] md:w-full">
                        <div className="flex flex-col gap-7">
                          {/* personal information section */}
                          <div className="flex flex-col items-start gap-7">
                            <Text as="p" className="!font-medium !text-indigo-800">
                              Personal Information
                            </Text>
                            <div className="self-stretch">
                              <div className="flex flex-col gap-7">
                                <div className="flex justify-center sm:flex-col">
                                  <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                                    <Text size="textxs" as="p" className="uppercase">
                                      full Name
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      Grace Effiom
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                                    <Text size="textxs" as="p" className="uppercase">
                                      Phone Number
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      07060780922
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start gap-1.5">
                                    <Text size="textxs" as="p" className="uppercase">
                                      Email Address
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      grace@gmail.com
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                                    <Text size="textxs" as="p" className="uppercase">
                                      Bvn
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      07060780922
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start gap-1.5">
                                    <Text size="textxs" as="p" className="uppercase">
                                      Gender
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      Female
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex items-center justify-center md:flex-col">
                                  <div className="flex flex-col items-start gap-2">
                                    <Text size="textxs" as="p" className="uppercase">
                                      Marital status
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      Single
                                    </Text>
                                  </div>
                                  <div className="flex flex-1 justify-center px-[50px] md:self-stretch md:px-5">
                                    <div className="flex flex-col items-start gap-1.5">
                                      <Text size="textxs" as="p" className="uppercase">
                                        Children
                                      </Text>
                                      <Text as="p" className="!font-medium">
                                        None
                                      </Text>
                                    </div>
                                    <div className="flex flex-1 flex-col items-start gap-1.5">
                                      <Text size="textxs" as="p" className="uppercase">
                                        Type of residence
                                      </Text>
                                      <Text as="p" className="!font-medium">
                                        Parent’s Apartment
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-px bg-indigo-800_19" />
                        </div>
                        <div className="mt-7 flex flex-col gap-[30px]">
                          {/* education employment section */}
                          <div className="flex flex-col items-start gap-7">
                            <Text as="p" className="!font-medium !text-indigo-800">
                              Education and Employment
                            </Text>
                            <div className="self-stretch">
                              <div className="flex items-center md:flex-col">
                                <div className="flex w-[52%] flex-col gap-7 md:w-full">
                                  <div className="flex justify-center">
                                    <div className="flex flex-col items-start gap-1.5">
                                      <Text size="textxs" as="p" className="uppercase">
                                        level of education
                                      </Text>
                                      <Text as="p" className="!font-medium">
                                        B.Sc
                                      </Text>
                                    </div>
                                    <div className="flex flex-1 flex-col items-start gap-1.5">
                                      <Text size="textxs" as="p" className="uppercase">
                                        employment status
                                      </Text>
                                      <Text as="p" className="!font-medium">
                                        Employed
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex justify-center">
                                    <div className="flex flex-col items-start gap-2">
                                      <Text size="textxs" as="p" className="uppercase">
                                        office email
                                      </Text>
                                      <Text as="p" className="!font-medium">
                                        grace@lendsqr.com
                                      </Text>
                                    </div>
                                    <div className="flex flex-1 flex-col items-start gap-2">
                                      <Text size="textxs" as="p" className="uppercase">
                                        Monthly income
                                      </Text>
                                      <Text as="p" className="!font-medium">
                                        ₦200,000.00- ₦400,000.00
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-7 md:self-stretch">
                                  <div className="flex flex-col items-start gap-1.5">
                                    <Text size="textxs" as="p" className="uppercase">
                                      sector of employment
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      FinTech
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start gap-2">
                                    <Text size="textxs" as="p" className="uppercase">
                                      loan repayment
                                    </Text>
                                    <Text as="p" className="!font-medium">
                                      40,000
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-col items-start gap-1.5 self-start md:self-stretch sm:self-auto">
                                  <Text size="textxs" as="p" className="uppercase">
                                    Duration of employment
                                  </Text>
                                  <Text as="p" className="!font-medium">
                                    2 years
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-px bg-indigo-800_19" />
                        </div>

                        {/* social media section */}
                        <div className="mt-7 flex flex-col gap-[30px]">
                          <div className="flex flex-col items-start gap-7">
                            <Text as="p" className="!font-medium !text-indigo-800">
                              Socials
                            </Text>
                            <div className="flex self-stretch">
                              <div className="flex flex-1 flex-col items-start gap-1.5">
                                <Text size="textxs" as="p" className="uppercase">
                                  Twitter
                                </Text>
                                <Text as="p" className="!font-medium">
                                  @grace_effiom
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col items-start gap-1.5">
                                <Text size="textxs" as="p" className="uppercase">
                                  Facebook
                                </Text>
                                <Text as="p" className="!font-medium">
                                  Grace Effiom
                                </Text>
                              </div>
                              <div className="flex flex-col items-start gap-1.5">
                                <Text size="textxs" as="p" className="uppercase">
                                  Instagram
                                </Text>
                                <Text as="p" className="!font-medium">
                                  @grace_effiom
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="h-px bg-indigo-800_19" />
                        </div>
                        <div className="mt-7 flex flex-col gap-[30px]">
                          {/* guarantor information section */}
                          <div className="flex flex-col items-start gap-7">
                            <Text as="p" className="!font-medium !text-indigo-800">
                              Guarantor
                            </Text>
                            <div className="flex self-stretch sm:flex-col">
                              <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                                <Text size="textxs" as="p" className="uppercase">
                                  full Name
                                </Text>
                                <Text as="p" className="!font-medium">
                                  Debby Ogana
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                                <Text size="textxs" as="p" className="uppercase">
                                  Phone Number
                                </Text>
                                <Text as="p" className="!font-medium">
                                  07060780922
                                </Text>
                              </div>
                              <div className="flex flex-col items-start gap-1.5">
                                <Text size="textxs" as="p" className="uppercase">
                                  Email Address
                                </Text>
                                <Text as="p" className="!font-medium">
                                  debby@gmail.com
                                </Text>
                              </div>
                              <div className="flex flex-col items-start gap-1.5">
                                <Text size="textxs" as="p" className="uppercase">
                                  Relationship
                                </Text>
                                <Text as="p" className="!font-medium">
                                  Sister
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="h-px bg-indigo-800_19" />
                        </div>

                        {/* additional guarantor section */}
                        <div className="mt-[76px] flex justify-center sm:flex-col">
                          <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                            <Text size="textxs" as="p" className="uppercase">
                              full Name
                            </Text>
                            <Text as="p" className="!font-medium">
                              Debby Ogana
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                            <Text size="textxs" as="p" className="uppercase">
                              Phone Number
                            </Text>
                            <Text as="p" className="!font-medium">
                              07060780922
                            </Text>
                          </div>
                          <div className="flex flex-col items-start gap-1.5">
                            <Text size="textxs" as="p" className="uppercase">
                              Email Address
                            </Text>
                            <Text as="p" className="!font-medium">
                              debby@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-col items-start gap-1.5">
                            <Text size="textxs" as="p" className="uppercase">
                              Relationship
                            </Text>
                            <Text as="p" className="!font-medium">
                              Sister
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
