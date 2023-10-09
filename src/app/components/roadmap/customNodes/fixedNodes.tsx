/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { Handle, Position, useUpdateNodeInternals } from "reactflow";

export function ResizableNodeSelected({
  //@ts-ignore
  data,
  // sourcePosition = Position.Left,
  // targetPosition = Position.Right,
}) {
  const updateNodeInternals = useUpdateNodeInternals();

  return (
    <div className="node">
      <div>
        <h1>{data.label === `` ? "내용을 추가해주세요." : data.label}</h1>
      </div>
      <Handle position={Position.Right} type="source" />
      <Handle position={Position.Left} type="target" />
      <Handle position={Position.Bottom} type="target" />
      <Handle position={Position.Top} type="source" />
    </div>
  );
}
