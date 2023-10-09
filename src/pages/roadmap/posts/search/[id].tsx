import BaseLayout from "@/app/components/layouts/BaseLayout";
import { baseUrl } from "@/axiosInstance/constants";
import axios from "axios";
import type { GetServerSideProps } from "next";
import Link from "next/link";

//@ts-ignore
const Posts = ({ posts }) => {
  const renderRoadmapPosts = () => {
    // console.log(posts);
    // debugger;
    //@ts-ignore
    return posts?.result?.map((post) => (
      <li key={post.id}>
        <Link href={`/roadmap/posts/${post.id}`}>{post.title}</Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <h1>검색 결과</h1>
      <ul>{renderRoadmapPosts()}</ul>
    </BaseLayout>
  );
};
export default Posts;

export const getServerSideProps = (async (context) => {
  let posts = [];
  // console.log(context?.query?.id);
  // debugger;
  try {
    const res = await axios.get(
      // `${baseUrl}/roadmaps/search/${}?page=${1}&size=5`
      `${baseUrl}/roadmaps/search/${context?.query?.id}?page=${1}&size=5`
    );
    posts = res.data;
  } catch (e) {
    console.log(e);
    console.log("cannot fetch roadmaps");
    debugger;
  }
  // return { posts: posts };
  return { props: { posts } };
  // return { props: { repo } }
}) satisfies GetServerSideProps<{
  // repo: Repo
}>;
