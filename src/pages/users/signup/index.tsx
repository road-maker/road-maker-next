import BaseLayout from "@/app/components/layouts/BaseLayout";
import { Button, Input } from "@mantine/core";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <BaseLayout>
        <Link href={`/users/signin`}>로그인 하기</Link>
        <form id="signupForm">
          <div>
            닉네임 : <Input type="text" id="nickname" />
          </div>
          <div>
            이메일 : <Input type="email" id="email" autoComplete="off" />
          </div>
          <div>
            비밀번호 :{" "}
            <Input type="password" id="password" autoComplete="off" />
          </div>
          <div>
            비밀번호 확인 :{" "}
            <Input type="password" id="passwordCheck" autoComplete="off" />
          </div>
          <Button>회원 가입하기</Button>
        </form>
      </BaseLayout>
    </>
  );
};
export default SignUp;
