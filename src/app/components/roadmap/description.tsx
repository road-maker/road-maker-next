//use client;

import { Button } from "@mantine/core";

//@ts-ignore;
const RoadmapDescription = ({ posts }) => {
  //   debugger;
  return (
    <>
      <h1>{posts.title}</h1>
      <div>
        <p>{posts.createdAt}</p>
        <p>{posts.description}</p>
        <p>{posts.createdAt}</p>
        <p>{posts.createdAt}</p>
        {posts.isJoined ? <Button>참여중</Button> : <Button>참여하기</Button>}
        {posts.isLiked ? (
          <Button>🩷{posts.likeCount}</Button>
        ) : (
          <Button>🤍{posts.likeCount}</Button>
        )}
      </div>
    </>
  );
};
export default RoadmapDescription;
