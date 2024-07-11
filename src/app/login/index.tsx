"use client"

import { Button, Heading, Input, Text, Img } from "../../components";
import React, {useState} from "react";
import Head from "next/head";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/index';
import { userData, UserRowType } from "../../constants/data";
import { loginUser } from '../../redux/loginSlice';
import { useAppDispatch } from "../../redux/hook";


export default function LogInPage() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<UserRowType | null>()
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogin = () => {
        const user = userData.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          dispatch(loginUser(user));
          localStorage.setItem("user", JSON.stringify(user))
          router.push('/dashboard');
        } else {
          alert('Invalid credentials');
        }
      };

    return (
        <>
        <Head>
            <title>Login - Access Your Account</title>
            <meta
            name="description"
            content="Welcome to our login page. Enter your details to access your account. Forgot your password? We're here to help."
            />
        </Head>

        {/* login page section */}
        <div className="flex w-full items-start bg-white-a700 md:flex-col">
            {/* header section */}
            <div className="mt-[106px] flex flex-1 flex-col gap-[138px] pl-[66px] pr-14 md:gap-[103px] md:self-stretch md:p-5 md:px-5 sm:gap-[69px]">
            <Img
                src="default-monochrome.svg"
                width={144}
                height={30}
                alt="Header Logo"
                className="ml-[30px] h-[36px] w-[172px] object-contain md:ml-0"
            />
            <Img src="img_pablo_sign_in_1.png" width={750} height={350} alt="Sign-in Illustration" className="h-[336px] object-cover" />
            </div>

            {/* login form section */}
            <div className="mb-1 flex h-[894px] w-[48%] flex-col items-center justify-center self-center bg-[url(/public/images/img_group_24.png)] bg-cover bg-no-repeat px-14 py-[214px] md:h-auto md:w-full md:p-5">
            <div className="mb-[68px] flex w-[84%] flex-col items-start md:w-full">
                <Heading size="headingmd" as="h1" className="!font-avenirnext tracking-[-1.60px] !text-indigo-800">
                Welcome!
                </Heading>
                <Text size="textlg" as="p" className="mt-2.5 !font-avenirnext">
                Enter details to login.
                </Text>
                <div className="mt-[60px] flex w-[88%] flex-col items-start gap-[26px] md:w-full">
                <Input
                    shape="round"
                    type="text"
                    name="Username"
                    value={username}
                    placeholder={`Username`}
                    onChange={(e) => setUsername(e.target.value)}
                    className="self-stretch border-2 border-blue_gray-600_26 font-avenirnext sm:pr-5"
                />
                <Input
                    shape="round"
                    type="password"
                    name="Password Input"
                    value={password}
                    placeholder={`Password`}
                    onChange={(e) => setPassword(e.target.value)}
                    className="self-stretch border-2 border-blue_gray-600_26 font-avenirnext sm:pr-5"
                />
                <a href="#">
                    <Heading as="h2" className="!font-avenirnext uppercase tracking-[1.20px] !text-cyan-400">
                    Forgot PASSWORD?
                    </Heading>
                </a>
                <Button
                    onClick={handleLogin}
                    size="md"
                    shape="round"
                    className="w-full font-avenirnext font-semibold uppercase tracking-[1.40px] sm:px-5 bg-[#1a94b8]"
                >
                    LOG IN
                </Button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
