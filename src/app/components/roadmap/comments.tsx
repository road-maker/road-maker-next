//use client;

//@ts-ignore
const Comments = ({ id, comments }) => {
  //   console.log([id, comments]);
  //   debugger;
  const renderComments = () => {
    if (comments?.result.length === 0) return;
    //@ts-ignore
    return comments?.result.map((v, idx) => <div key={idx}>{v.content}</div>);
  };
  return (
    <>
      <h1>comments section</h1>
      {renderComments()}
    </>
  );
};
export default Comments;
