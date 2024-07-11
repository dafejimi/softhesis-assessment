import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "User Details - Manage User Information",
  description:
    "View and manage user details including personal information, bank details, loans, and savings. Ensure your users' data is up to date.",
  //ogTitle:'...'
};

export default function UsersgeneraldetailsPage() {
  return <Page />;
}
