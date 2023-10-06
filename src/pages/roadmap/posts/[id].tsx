import BaseLayout from "@/app/components/layouts/BaseLayout";
import RoadmapDescription from "@/app/components/roadmap/description";
import RoadmapGraph from "@/app/components/roadmap/graph";
import { baseUrl } from "@/axiosInstance/constants";
import axios from "axios";
import type { GetServerSideProps } from "next";
//@ts-ignore
const Post = ({ posts }) => {
  // console.log("posts", posts);
  // debugger;
  return (
    <BaseLayout>
      <h1>this is roadmap post detail page</h1>
      <RoadmapDescription posts={posts} />
      <RoadmapGraph edges={posts?.edges} nodes={posts?.nodes} />
    </BaseLayout>
  );
};
export default Post;

//@ts-ignore
export const getServerSideProps = (async ({ query }) => {
  let posts = [];
  try {
    const res = await axios.get(`${baseUrl}/roadmaps/${query?.id}`);
    posts = res.data;
  } catch (e) {
    console.log(e);
    console.log("cannot fetch roadmaps");
    debugger;
  }
  return { props: { posts } };
}) satisfies GetServerSideProps<{
  // repo: Repo
}>;
