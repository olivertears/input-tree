import { FC, useState } from 'react';
import * as S from './tree.styles';
import { Node } from '../node';
import { INode } from '../../interfaces/INode';

let id = 0;
const root: INode = { id, value: '', childrenIds: [], parentId: null };

export const Tree: FC = () => {
  const [tree, setTree] = useState<INode[]>([root]);

  const addNode = (parentId: number) => {
    setTree((state) => [
      ...[...state].map((node) =>
        node.id === parentId ? { ...node, childrenIds: [...node.childrenIds, ++id] } : node
      ),
      { id, value: '', childrenIds: [], parentId }
    ]);
  };

  const deleteNode = (parentId: number, nodeId: number) => {
    setTree((state) =>
      state.map((node) =>
        node.id === parentId
          ? { ...node, childrenIds: [...node.childrenIds.filter((id) => id !== nodeId)] }
          : node
      )
    );
  };

  const changeValue = (nodeId: number, value: string) => {
    setTree((state) => state.map((node) => (node.id === nodeId ? { ...node, value } : node)));
  };

  return (
    <S.Wrap>
      <Node
        key={root.id}
        nodeId={root.id}
        tree={tree}
        addNode={addNode}
        deleteNode={deleteNode}
        changeValue={changeValue}
      />
    </S.Wrap>
  );
};
