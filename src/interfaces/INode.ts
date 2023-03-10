export interface INode {
  id: number;
  value: string;
  parentId: number | null;
  childrenIds: number[];
}
