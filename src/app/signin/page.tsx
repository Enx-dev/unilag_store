"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { GoogleButton } from "@/app/components";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <GoogleButton />
      <button onClick={() => signOut()}>signout</button>
    </div>
  );
};

export default page;
