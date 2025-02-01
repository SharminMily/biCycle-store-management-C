import React, { useState, useEffect } from "react";
import { TreeTable, TreeTableEvent, TreeTablePageEvent } from "primereact/treetable";
import { Column } from "primereact/column";
import { TreeNode } from "primereact/treenode";

const ManageBicycle = () => {
  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(6);
  const [totalRecords, setTotalRecords] = useState<number>(100);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setNodes(loadNodes(first, rows));
    }, 500);
  }, []);

  const loadNodes = (first: number, rows: number): TreeNode[] => {
    let nodes: TreeNode[] = [];

    for (let i = 0; i < rows; i++) {
      let node: TreeNode = {
        key: (first + i).toString(),
        data: {
          name: `Bicycle ${first + i}`,
          size: `${Math.floor(Math.random() * 1000) + 1}kg`,
          type: `Type ${first + i}`,
        },
        leaf: false,
      };

      nodes.push(node);
    }

    return nodes;
  };

  const onExpand = (event: TreeTableEvent) => {
    if (!event.node.children) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        let lazyNode = { ...event.node };

        lazyNode.children = [
          {
            data: {
              name: lazyNode.data.name + " - Model A",
              size: `${Math.floor(Math.random() * 1000) + 1}kg`,
              type: "SubType A",
            },
          },
          {
            data: {
              name: lazyNode.data.name + " - Model B",
              size: `${Math.floor(Math.random() * 1000) + 1}kg`,
              type: "SubType B",
            },
          },
        ];

        setNodes((prevNodes) =>
          prevNodes.map((node) => (node.key === event.node.key ? lazyNode : node))
        );
      }, 250);
    }
  };

  const onPage = (event: TreeTablePageEvent) => {
    setLoading(true);

    setTimeout(() => {
      setFirst(event.first);
      setRows(event.rows);
      setNodes(loadNodes(event.first, event.rows));
      setLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-5xl mx-auto p-2">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Manage Bicycles</h2>

      <div className="bg-white shadow-lg rounded-lg p-1">
        <TreeTable
          
        >
          <Column field="name" header="Bicycle Name" expander className="p-4" />
          <Column field="size" header="Brand" className="p-4" />
          <Column field="size" header="Price" className="p-4" />
          <Column field="type" header="quantity" className="p-4" />
          <Column field="type" header="update" className="p-4" />
          <Column field="type" header="Deleted" className="p-4" />
        </TreeTable>
      </div>
    </div>
  );
};

export default ManageBicycle;
