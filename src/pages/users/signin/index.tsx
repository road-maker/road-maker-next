import BaseLayout from "@/app/components/layouts/BaseLayout";
// import { useAuth } from "@/hooks/useAuth";
import { Button, Input } from "@mantine/core";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Signin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) return router.replace(`/`);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const submitForm = () => {
    if (credentials.email.length === 0 || credentials.password.length === 0)
      return;
    const reg = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (!credentials.email.match(reg)) {
      debugger;
      return;
    }
    signIn();
    // auth.signin(credentials.email, credentials.password);
  };

  return (
    <>
      <BaseLayout>
        <Link href={`/users/signup`}>회원가입하기</Link>
        <form id="signinForm">
          <div>
            이메일 :{" "}
            <Input
              type="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              id="email"
              name="email"
            />
          </div>
          <div>
            비밀번호 :{" "}
            <Input
              id="password"
              type="password"
              value={credentials.password}
              name="password"
              autoComplete="off"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </div>
          <Button onClick={submitForm}>로그인하기</Button>
        </form>
      </BaseLayout>
    </>
  );
};
export default Signin;
