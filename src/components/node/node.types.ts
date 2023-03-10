import { ITree } from '../../interfaces/ITree';

export interface NodeProps {
  nodeId: number;
  tree: ITree;
  addNode: (parentId: number) => void;
  deleteNode: (parentId: number, nodeId: number) => void;
  changeValue: (nodeId: number, value: string) => void;
}
