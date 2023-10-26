import BaseLayout from "@/app/components/layouts/BaseLayout";
import { useSession } from "next-auth/react";

const MyPage = () => {
  useSession();
  return (
    <>
      <BaseLayout>My page</BaseLayout>
    </>
  );
};
export default MyPage;
