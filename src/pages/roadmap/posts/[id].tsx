import BaseLayout from "@/app/components/layouts/BaseLayout";
import Comments from "@/app/components/roadmap/comments";
import RoadmapDescription from "@/app/components/roadmap/description";
import RoadmapGraph from "@/app/components/roadmap/graph";
import { baseUrl } from "@/axiosInstance/constants";
import axios from "axios";
import type { GetServerSideProps } from "next";
import "./roadmap.css";
//@ts-ignore
const Post = ({ posts, comments }) => {
  console.log(posts);
  console.log(comments);
  debugger;
  return (
    <BaseLayout>
      <RoadmapDescription posts={posts} />
      <section className="wrap">
        <RoadmapGraph edges={posts?.edges} nodes={posts?.nodes} />
      </section>
      <Comments id={posts?.id} comments={comments} />
    </BaseLayout>
  );
};
export default Post;

//@ts-ignore
export const getServerSideProps = (async ({ query }) => {
  let posts = [];
  let comments = [];
  try {
    const res = await axios.get(`${baseUrl}/roadmaps/${query?.id}`);
    posts = res.data;
  } catch (e) {
    console.log(e);
    console.log("cannot fetch roadmaps");
    debugger;
  }
  try {
    const res = await axios.get(
      `${baseUrl}/roadmaps/load-roadmap/${query?.id}/comments?page=1&size=5`
    );
    comments = res.data;
  } catch (e) {
    console.log(e);
    console.log("cannot fetch comments");
    debugger;
  }
  return { props: { posts, comments } };
}) satisfies GetServerSideProps<{
  // repo: Repo
}>;
