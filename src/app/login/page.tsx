import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Login to access dashboard.",
  //ogTitle:'...'
};

export default function LoginPage() {
  return <Page />;
}
