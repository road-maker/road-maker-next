import BaseLayout from "@/app/components/layouts/BaseLayout";
import { baseUrl } from "@/axiosInstance/constants";
import axios from "axios";
import type { GetServerSideProps } from "next";
import Link from "next/link";

// export default function Page({
//   repo,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return repo.stargazers_count
// }
//@ts-ignore
const Posts = ({ posts }) => {
  const renderRoadmapPosts = () => {
    //@ts-ignore
    return posts?.result?.map((post) => (
      <li key={post.id}>
        <Link href={`/roadmap/posts/${post.id}`}>{post.title}</Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <ul>{renderRoadmapPosts()}</ul>
    </BaseLayout>
  );
};
export default Posts;

// Posts.getInitialProps = async () => {
//   export const getServerSideProps : GetServerSideProps = async context => {
//   let posts = [];
//   try {
//     // const res = await axios.get(`${baseUrl}/roadmaps/search/${}?page=${1}&size=5`)
//     const res = await axios.get(
//       `${baseUrl}/roadmaps/search/자바?page=${1}&size=5`
//     );
//     posts = res.data;
//   } catch (e) {
//     console.log(e);
//     console.log("cannot fetch roadmaps");
//     debugger;
//   }
//   return { posts: posts };
// };

// type Repo = {
//   name: string
//   stargazers_count: number
// }

export const getServerSideProps = (async (context) => {
  let posts = [];
  try {
    // const res = await axios.get(`${baseUrl}/roadmaps/search/${}?page=${1}&size=5`)
    const res = await axios.get(
      `${baseUrl}/roadmaps?page=1&order-type=recent`
      // `${baseUrl}/roadmaps/search/자바?page=${1}&size=5`
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
