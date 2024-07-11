import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Dashboard - Overview of Your Activities",
  description:
    "Explore your Dashboard to manage customers, loans, savings, and view reports. Access all your financial services in one place.",
  //ogTitle:'...'
};

export default function DashboardPage() {
  return <Page />;
}
