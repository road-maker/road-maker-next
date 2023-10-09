import dagre from "@dagrejs/dagre";
import { useState } from "react";
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
const nodeTypes = {
  custom: ResizableNodeSelected,
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

//@ts-ignore
const RoadmapGraph = ({ edges, nodes }) => {
  const [node, setNodes, onNodesChange] = useNodesState(nodes);
  const [edge, setEdges, onEdgesChange] = useEdgesState(edges);
  const [zoomOnScroll, setZoomOnScroll] = useState(false);
  const [isSelectable] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  //   console.log([edges, nodes]);
  //   debugger;
  return (
    <>
      <NodeDetail isOpen={isOpen} setIsOpen={setIsOpen} />
      <ReactFlowProvider>
        <ReactFlow
          nodes={node}
          edges={edge}
          attributionPosition="top-right"
          proOptions={proOptions}
          zoomOnScroll={zoomOnScroll}
          elementsSelectable={isSelectable}
          // nodesConnectable={isConnectable}
          nodesDraggable={zoomOnScroll}
          panOnScroll={zoomOnScroll}
          // zoomOnDoubleClick={zoomOnDoubleClick}
          panOnDrag={zoomOnScroll}
          // minZoom={0.2}
          // maxZoom={4}
          nodeTypes={nodeTypes}
          onNodeClick={(e, nodeInfo) => {
            setIsOpen(true);
            console.log(nodeInfo);
            debugger;
          }}
          fitView
          style={{
            backgroundColor: "#e5e7eb",
          }}
        >
          <Background gap={16} />
        </ReactFlow>
      </ReactFlowProvider>
    </>
  );
};
export default RoadmapGraph;
