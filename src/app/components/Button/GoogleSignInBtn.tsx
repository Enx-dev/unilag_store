"use client";
import React from "react";
import BaseButton from "./BaseButton";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Props = {};

const GoogleSignInBtn = (props: Props) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl")!
    ? searchParams.get("callbackUrl")!
    : "/";
  return (
    <BaseButton onClick={() => signIn("google", { callbackUrl })}>
      Google Sign In
    </BaseButton>
  );
};

export default GoogleSignInBtn;
