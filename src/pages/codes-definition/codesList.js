import React, { createContext, useContext, useState } from 'react';
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { Col, Row, Table, Button, Spin } from 'antd';

import {
  UserOutlined,
  LoadingOutlined,
  UnorderedListOutlined,
  SnippetsOutlined,
  CloseCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import LayoutComponent from '../../components/layout';
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const CodesListPage = () => {
  const [bordered, setBordered] = React.useState(true);
  const [empty, setEmpty] = React.useState(false);
  const tblRef = React.useRef(null);
  const [expanded, setExpanded] = React.useState(false);
  const [pageLoader, setPageLoader] = useState(false);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <>
      <LayoutComponent>
        <Row>
          <Col xs={24} xl={24} span={24} style={{ paddingTop: "0px", paddingBottom: "0px" }} >
            <Row>
              <Col
                style={{ display: "flex", alignItems: "center" }}
                xs={6}
                xl={4}
                span={4}
              >
                <h1
                  className=""
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "15px",
                    fontSize: "18px",
                  }}
                >
                  Cabrig List
                </h1>
              </Col>
              <Col xs={18} xl={20} span={4} style={{ marginTop: '10px' }}>
                <Row justify="end">
                  <Col xs={4} xl={2} span={2}>
                    <Button>Add</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={24} xl={24} span={24} style={{ padding: "8px" }}>
            <div>
              <Table
                // bordered={bordered}
                loading={pageLoader}
                //virtual
                columns={columns}
                scroll={{ y: 470 }}
                //rowKey="id"
                dataSource={empty ? [] : data}
                pagination={{ pageSize: 20 }}
                ref={tblRef}
                className="list-table"
                size={"small"}

              /* rowSelection={
               expanded
                   ? undefined
                   : {
                     type: 'radio',
                     columnWidth: 48,
                     }
                     } */
              /* expandable={expandableProps} */
              />
            </div>
          </Col>
        </Row>
      </LayoutComponent>
    </>
  );
};
export default CodesListPage;