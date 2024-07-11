"use client";

import { Text, Img } from "./../..";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar11({ ...props }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}
  return (
    <Sidebar
      {...props}
      width="284px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 44 } }}
      className={`${props.className} flex flex-col self-center h-screen pt-[38px] gap-11 top-0 sm:pt-5 bg-white-a700 shadow-md !sticky overflow-auto`}
    >
      <div className="mx-[30px] flex flex-wrap items-center justify-center gap-2.5 self-stretch">
        <Img src="img_briefcase_1.svg" width={16} height={16} alt="Briefcase Icon" className="h-[16px] w-[16px]" />
        <Text as="p" className="!text-indigo-800">
          Switch Organization
        </Text>
        <Img
          src="img_arrow_down.svg"
          width={14}
          height={14}
          alt="Dropdown Arrow"
          className="h-[14px] w-[14px] self-start"
        />
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: "10px 10px 10px 28px",
            gap: "10px",
            opacity: 0.6,
            alignSelf: "stretch",
            color: "#213f7d",
            fontWeight: 400,
            fontSize: "16px",
            [`&:hover, &.ps-active`]: { backgroundColor: "#39cdcc0f !important" },
          },
        }}
        className="w-full self-stretch"
      >
        <div>
          <MenuItem
            icon={
              <Img
                src="img_home_1_indigo_800.svg"
                width={16}
                height={14}
                alt="Home Icon"
                className="h-[14px] w-[16px]"
              />
            }
          >
            Dashboard
          </MenuItem>
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <Text size="textxs" as="p" className="ml-[30px] mt-[18px] !font-medium">
            CUSTOMERS
          </Text>
          <MenuItem
            icon={
              <Img
                src="img_user_friends_1_indigo_800.svg"
                width={16}
                height={12}
                alt="Users Icon"
                className="h-[12px] w-[16px]"
              />
            }
          >
            Users
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_users_1_indigo_800.svg"
                width={16}
                height={12}
                alt="Guarantors Icon"
                className="h-[12px] w-[16px]"
              />
            }
          >
            Guarantors
          </MenuItem>
          <MenuItem
            icon={<Img src="img_sack_1.svg" width={16} height={16} alt="Loans Icon" className="h-[16px] w-[16px]" />}
          >
            Loans
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_handshake_regular_indigo_800.svg"
                width={18}
                height={14}
                alt="Decision Models Icon"
                className="h-[14px] w-[18px]"
              />
            }
          >
            Decision Models
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_piggy_bank_1_indigo_800.svg"
                width={16}
                height={14}
                alt="Savings Icon"
                className="h-[14px] w-[16px]"
              />
            }
          >
            Savings
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_thumbs_up_indigo_800_22x18.svg"
                width={18}
                height={22}
                alt="Loan Requests Icon"
                className="h-[22px] w-[18px]"
              />
            }
          >
            Loan Requests
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_user_check_1.svg"
                width={16}
                height={12}
                alt="Whitelist Icon"
                className="h-[12px] w-[16px]"
              />
            }
          >
            Whitelist
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_user_times_1_indigo_800.svg"
                width={16}
                height={12}
                alt="Karma Icon"
                className="h-[12px] w-[16px]"
              />
            }
          >
            Karma
          </MenuItem>
        </div>
        <div className="mt-[26px] flex flex-col items-start gap-2.5">
          <Text size="textxs" as="p" className="ml-7 !font-medium">
            BUSINESSES
          </Text>
          <MenuItem
            icon={
              <Img
                src="img_briefcase_1.svg"
                width={16}
                height={16}
                alt="Organization Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Organization
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_thumbs_up_indigo_800_22x18.svg"
                width={18}
                height={22}
                alt="Loan Products Icon"
                className="h-[22px] w-[18px]"
              />
            }
          >
            Loan Products
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_np_bank_148501_000000.svg"
                width={16}
                height={16}
                alt="Savings Products Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Savings Products
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_thumbs_up_indigo_800.svg"
                width={16}
                height={16}
                alt="Fees Charges Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Fees and Charges
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_bookmark.svg"
                width={16}
                height={18}
                alt="Transactions Icon"
                className="h-[18px] w-[16px]"
              />
            }
          >
            Transactions
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_galaxy_1_indigo_800.svg"
                width={16}
                height={16}
                alt="Services Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Services
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_user_cog_1_indigo_800.svg"
                width={16}
                height={12}
                alt="Service Account Icon"
                className="h-[12px] w-[16px]"
              />
            }
          >
            Service Account
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_scroll_1_indigo_800.svg"
                width={16}
                height={12}
                alt="Settlements Icon"
                className="h-[12px] w-[16px]"
              />
            }
          >
            Settlements
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_chart_bar_2_indigo_800.svg"
                width={16}
                height={16}
                alt="Reports Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Reports
          </MenuItem>
        </div>
        <div className="mt-[26px] flex flex-col items-start gap-2.5">
          <Text size="textxs" as="p" className="ml-7 !font-medium">
            SETTINGS
          </Text>
          <MenuItem
            icon={
              <Img
                src="img_sliders_h_1_indigo_800.svg"
                width={16}
                height={16}
                alt="Preferences Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Preferences
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_badge_percent_1_indigo_800.svg"
                width={16}
                height={16}
                alt="Fees Pricing Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Fees and Pricing
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_clipboard_list_1_indigo_800.svg"
                width={16}
                height={20}
                alt="Audit Logs Icon"
                className="h-[20px] w-[16px]"
              />
            }
          >
            Audit Logs
          </MenuItem>
          <MenuItem
            icon={
              <Img
                src="img_settings_indigo_800.svg"
                width={16}
                height={16}
                alt="System Messages Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Systems Messages
          </MenuItem>
        </div>
        <div className="mt-[58px] h-px bg-indigo-800_19" />
        <div>
          <MenuItem
            icon={
              <Img
                src="img_user_indigo_800.svg"
                width={16}
                height={16}
                alt="Logout Icon"
                className="h-[16px] w-[16px]"
              />
            }
          >
            Logout
          </MenuItem>
        </div>
      </Menu>
      {!collapsed ? (
        <Text size="textxs" as="p" className="mb-[178px] ml-7 !text-indigo-800">
          v1.2.0
        </Text>
      ) : null}
    </Sidebar>
  );
}
