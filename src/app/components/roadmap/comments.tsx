//use client;

//@ts-ignore
const Comments = ({ id, comments }) => {
  //   debugger;
  const renderComments = () => {
    if (!comments?.result) return;
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
