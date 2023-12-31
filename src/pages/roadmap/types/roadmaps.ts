import { Member } from "@/types/common";

export interface RoadmapPost {
  id: number;
  title: string;
  edges: Array<Edge>;
  nodes: Array<GraphNode>;
  description: string;
  thumbnailUrl: URL;
  likeCount: number;
  joinCount: 1;
  member: Member;
  createdAt: Date;
  updatedAt: Date;
  isJoined?: boolean;
  isLiked?: boolean;
  viewport?: Position;
}
type EdgeTypes = "smoothstep";
type NodeTypes = "custom" | "default";

export interface Edge {
  animated: true;
  id: string;
  source: string;
  target: string;
  type: EdgeTypes;
}

type BlogKeyword = { id: number; keyword: string };
type NodeLabel = { label: string };
type Position = { x: number; y: number; zoom: number };
type HandlePosition = "left" | "right" | "top" | "bottom";

type NodeStyle = {
  background: string;
  border: string;
  borderRadius: number;
  fontSize: number;
};

export interface GraphNode {
  id: string;
  blogKeyword?: BlogKeyword;
  data: NodeLabel;
  detailedContent: string;
  done: boolean;
  height: number;
  position: Omit<Position, "zoom">;
  positionAbsolute: Omit<Position, "zoom">;
  sourcePosition: HandlePosition;
  style: NodeStyle;
  targetPosition: HandlePosition;
  type: NodeTypes;
  width: number;
}
export interface Comment {
  roadmapId: RoadmapPost["id"];
  content: string;
  createdAt: RoadmapPost["createdAt"];
  nickname: Member["nickname"];
  updatedAt: RoadmapPost["updatedAt"];
}

export type Comments = Array<Comment>;
