"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Text, Img } from "./../..";
import React from "react";
import { MenuItem, SubMenu, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "../../../redux/index"



interface Props {
  className?: string;
}

export default function Sidebar1({ ...props }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push('/');
  };
  return (
    <Sidebar
    {...props}
    width="284px !important"
    rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 40 } }}
    className={`${props.className} flex flex-col self-center h-screen pt-[38px] gap-10 top-0 sm:pt-5 bg-white-a700 shadow-md !sticky overflow-auto`}
  >
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
      className="w-full self-stretch pb-[46px] md:pb-5"
    >
      <div className="flex flex-col gap-2.5">
        <SubMenu
          icon={
            <Img
              src="img_briefcase_1.svg"
              width={16}
              height={16}
              alt="Briefcase Icon"
              className="h-[16px] w-[16px]"
            />
          }
          label="Home"
        >
          <MenuItem>Messages</MenuItem>
        </SubMenu>
        <MenuItem
          icon={<Img src="img_home_1.svg" width={16} height={14} alt="Home Icon" className="h-[14px] w-[16px]" />}
        >
          Account
        </MenuItem>
      </div>
      <div className="mt-[38px] flex flex-col items-start gap-2.5">
        <Text size="textxs" as="p" className="ml-[30px] !font-medium">
          Profile
        </Text>
        <MenuItem
          icon={
            <Img
              src="img_user_friends_1.svg"
              width={16}
              height={12}
              alt="Friends Icon"
              className="h-[12px] w-[16px]"
            />
          }
        >
          Settings
        </MenuItem>
        <MenuItem
          icon={<Img src="img_users_1.svg" width={16} height={12} alt="Users Icon" className="h-[12px] w-[16px]" />}
        >
          Projects
        </MenuItem>
        <MenuItem
          icon={<Img src="img_sack_1.svg" width={16} height={16} alt="Sack Icon" className="h-[16px] w-[16px]" />}
        >
          Activities
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_handshake_regular.svg"
              width={18}
              height={14}
              alt="Handshake Icon"
              className="h-[14px] w-[18px]"
            />
          }
        >
          Reports/Analytics
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_piggy_bank_1.svg"
              width={16}
              height={14}
              alt="Piggy Bank Icon"
              className="h-[14px] w-[16px]"
            />
          }
        >
          Log
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_thumbs_up.svg" width={18} height={22} alt="Thumbs Up Icon" className="h-[22px] w-[18px]" />
          }
        >
          Messages
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_user_check_1.svg" width={16} height={12} alt="Check Icon" className="h-[12px] w-[16px]" />
          }
        >
          Whitelist
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_user_times_1.svg" width={16} height={12} alt="Times Icon" className="h-[12px] w-[16px]" />
          }
        >
          Notifications
        </MenuItem>
      </div>
      <div className="mt-[26px] flex flex-col items-start gap-2.5">
        <Text size="textxs" as="p" className="ml-7 !font-medium">
          Tasks
        </Text>
        <MenuItem
          icon={
            <Img
              src="img_briefcase_1.svg"
              width={16}
              height={16}
              alt="Briefcase Icon"
              className="h-[16px] w-[16px]"
            />
          }
        >
          Actions
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_thumbs_up.svg" width={18} height={22} alt="Thumbs Up Icon" className="h-[22px] w-[18px]" />
          }
        >
          Calender
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_np_bank_148501_000000.svg"
              width={16}
              height={16}
              alt="Bank Icon"
              className="h-[16px] w-[16px]"
            />
          }
        >
          Integrations
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_thumbs_up_indigo_800.svg"
              width={16}
              height={16}
              alt="Thumbs Up Icon"
              className="h-[16px] w-[16px]"
            />
          }
        >
          Files/Docs
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_bookmark.svg" width={16} height={18} alt="Bookmark Icon" className="h-[18px] w-[16px]" />
          }
        >
          Transactions
        </MenuItem>
        <MenuItem
          icon={<Img src="img_galaxy_1.svg" width={16} height={16} alt="Galaxy Icon" className="h-[16px] w-[16px]" />}
        >
          Services
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_user_cog_1.svg" width={16} height={12} alt="User Cog Icon" className="h-[12px] w-[16px]" />
          }
        >
          Service Account
        </MenuItem>
        <MenuItem
          icon={<Img src="img_scroll_1.svg" width={16} height={12} alt="Scroll Icon" className="h-[12px] w-[16px]" />}
        >
          Settlements
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_chart_bar_2.svg"
              width={16}
              height={16}
              alt="Chart Bar Icon"
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
            <Img src="img_sliders_h_1.svg" width={16} height={16} alt="Sliders Icon" className="h-[16px] w-[16px]" />
          }
        >
          Preferences
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_badge_percent_1.svg"
              width={16}
              height={16}
              alt="Badge Percent Icon"
              className="h-[16px] w-[16px]"
            />
          }
        >
          Billing
        </MenuItem>
        <MenuItem
          icon={
            <Img
              src="img_clipboard_list_1.svg"
              width={16}
              height={20}
              alt="Clipboard List Icon"
              className="h-[20px] w-[16px]"
            />
          }
        >
          Help/Support
        </MenuItem>
        <MenuItem
          icon={
            <Img src="img_settings.svg" width={16} height={16} alt="Settings Icon" className="h-[16px] w-[16px]" />
          }
        >
          Systems Messages
        </MenuItem>
        <MenuItem
          icon={<Img src="img_user.svg" width={16} height={16} alt="User Icon" className="h-[16px] w-[16px]" />}
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </div>
    </Menu>
    <Text size="textxs" as="p" className="mb-[180px] ml-7 !text-indigo-800">
      v1.2.0
    </Text>
  </Sidebar>
  );
}
