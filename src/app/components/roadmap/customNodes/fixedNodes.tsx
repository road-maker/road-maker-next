/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { Handle, Position, useUpdateNodeInternals } from "reactflow";

import { styled } from "styled-components";

export function ResizableNodeSelected({
  //@ts-ignore
  data,
  sourcePosition = Position.Left,
  targetPosition = Position.Right,
}) {
  const updateNodeInternals = useUpdateNodeInternals();

  return (
    <Wrap className="node">
      {/* <NodeResizer minWidth={180} minHeight={100} /> */}

      <div>
        {data.length > 2 ? (
          <div
          // style={{ padding: 10, display: 'inline-block', maxWidth: '240px' }}
          // style={{ padding: 10, display: "inline-block", maxWidth: "9rem" }}
          >
            {data.label === `` ? "내용을 추가해주세요." : data.label}
          </div>
        ) : (
          <h1>
            {/* style={{ padding: 10 }} */}
            {data.label === `` ? "내용을 추가해주세요." : data.label}
          </h1>
        )}
      </div>
      <Handle position={sourcePosition} type="source" />
      <Handle position={targetPosition} type="target" />
    </Wrap>
  );
}
const Wrap = styled.div`
  .node {
    /* width: 100%; */
    max-width: 240px;
    font-size: 24px;
    /* width: 7rem; */
    height: 64vh;
    border-radius: 15px;
    border: 1px solid #000;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
  }

  .node :global .react-flow__resize-control.handle {
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }

  .react-flow__node .react-flow__node-custom .nopan .selectable {
    max-width: 240px;
  }
  .react-flow__node .react-flow__node-custom .nopan .selectable {
    max-width: 240px;
  }
`;
