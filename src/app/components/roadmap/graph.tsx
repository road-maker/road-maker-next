import ReactFlow, { Background } from "reactflow";
import { ResizableNodeSelected } from "./customNodes/fixedNodes";
// import ResizableNodeSelected from "./custom/ResizableNodeSelected";
const proOptions = { hideAttribution: true };
const nodeTypes = {
  custom: ResizableNodeSelected,
};
//@ts-ignore
const RoadmapGraph = ({ edges, nodes }) => {
  //   console.log([edges, nodes]);
  //   debugger;
  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        proOptions={proOptions}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // elementsSelectable={isSelectable}
        // nodesConnectable={isConnectable}
        // nodesDraggable={isDraggable}
        // zoomOnScroll={zoomOnScroll}
        // panOnScroll={panOnScroll}
        // zoomOnDoubleClick={zoomOnDoubleClick}
        // panOnDrag={panOnDrag}
        attributionPosition="top-right"
        // minZoom={0.2}
        // maxZoom={4}
        nodeTypes={nodeTypes}
        // onNodeClick={(e, n) => {
        //   setLabel(`${n?.data?.label}`);
        //   setId(`${n?.id}`);
        //   setIsOpen(!isOpen);
        // }}
        fitView
        style={{
          backgroundColor: "#ebf6fc",
        }}
      >
        <Background gap={16} />
        {/* <Controls /> */}
        {/* <MiniMap zoomable pannable /> */}
      </ReactFlow>
    </>
  );
};
export default RoadmapGraph;
