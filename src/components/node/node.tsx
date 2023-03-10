import { FC } from 'react';
import * as S from './node.styles';
import { NodeProps } from './node.types';
import { INode } from '../../interfaces/INode';

export const Node: FC<NodeProps> = ({ nodeId, tree, addNode, deleteNode, changeValue }) => {
  const node: INode = tree[nodeId];
  return (
    <>
      <S.Wrap>
        <S.Input
          placeholder={nodeId.toString()}
          onChange={(e) => changeValue(nodeId, e.target.value)}
        />
        <S.Button onClick={() => addNode(nodeId)}>+</S.Button>
        <S.Button
          onClick={() => deleteNode(node.parentId as number, nodeId)}
          disabled={node?.parentId === null}
        >
          -
        </S.Button>
      </S.Wrap>
      {!!node?.childrenIds.length && (
        <S.ChildrenWrap>
          {node.childrenIds.map((id) => (
            <Node
              key={id}
              nodeId={id}
              tree={tree}
              addNode={addNode}
              deleteNode={deleteNode}
              changeValue={changeValue}
            />
          ))}
        </S.ChildrenWrap>
      )}
    </>
  );
};
