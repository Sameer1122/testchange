import React from "react";
import { Checkbox, Modal, Typography, Row } from "antd";

export default function SettingModal({
  open,
  setOpen,
  columns,
  visibleColumns,
  setVisibleColumns,
}) {
  // const isChecked = (key)=>{

  // }

  return (
    <Modal
      title="Visible Columns"
      destroyOnClose
      visible={open}
      cancelButtonProps={{ style: { display: "none" } }}
      onOk={() => {
        setOpen(!open);
      }}
      onCancel={() => {
        setOpen(!open);
      }}
    >
      {columns?.map((box) => {
        const isChecked = () => {
          return visibleColumns?.find((column) => column?.key === box?.key)
            ? true
            : false;
        };

        return (
          <Row style={{ gap: "20px", padding: "10px 0" }}>
            <Checkbox
              checked={isChecked()}
              onChange={(event) => {
                const isChecked = event.target.checked;
                if (isChecked) {
                  const insertColumn = columns?.find(
                    (col) => col.key === box.key
                  );

                  const newColumns = [...visibleColumns, { ...insertColumn }];
                  // Logic is ready, use if required
                  // newColumns?.sort((a, b) => {
                  //   let fa = a.sortKey,
                  //     fb = b.sortKey;

                  //   if (fa < fb) {
                  //     return -1;
                  //   }
                  //   if (fa > fb) {
                  //     return 1;
                  //   }
                  //   return 0;
                  // });

                  setVisibleColumns([...newColumns]);
                } else {
                  const newColumns = visibleColumns?.filter(
                    (col) => col.key !== box.key
                  );
                  setVisibleColumns([...newColumns]);
                }
              }}
            />
            <Typography>{box?.title}</Typography>
          </Row>
        );
      })}
    </Modal>
  );
}
