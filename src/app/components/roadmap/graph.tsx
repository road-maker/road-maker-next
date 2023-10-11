import dagre from "@dagrejs/dagre";
import { useMemo, useState } from "react";
import {
  Background,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { ResizableNodeSelected } from "./customNodes/fixedNodes";
import NodeDetail from "./nodeDetail";

const proOptions = { hideAttribution: true };

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

//@ts-ignore
const RoadmapGraph = ({ edges, nodes }) => {
  const [node, setNodes, onNodesChange] = useNodesState(nodes);
  const [edge, setEdges, onEdgesChange] = useEdgesState(edges);
  const [nodeDetail, setNodeDetail] = useState({});
  const [isSelectable] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const nodeTypes = useMemo(
    () => ({
      custom: ResizableNodeSelected,
    }),
    []
  );
  //   console.log([edges, nodes]);
  //   debugger;
  return (
    <>
      <NodeDetail
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        nodeDetail={nodeDetail}
      />
      <ReactFlowProvider>
        <ReactFlow
          preventScrolling={false}
          nodes={node}
          edges={edge}
          zoomOnScroll={false}
          proOptions={proOptions}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          elementsSelectable={isSelectable}
          nodeTypes={nodeTypes}
          snapToGrid={true}
          onNodeClick={(e, nodeInfo) => {
            setIsOpen(true);
            // console.log(nodeInfo);
            setNodeDetail(nodeInfo);
            // debugger;
          }}
          fitView={true}
          style={{
            backgroundColor: "#e5e7eb",
            cursor: "default",
          }}
        >
          <Background gap={16} />
        </ReactFlow>
      </ReactFlowProvider>
    </>
  );
};
export default RoadmapGraph;
