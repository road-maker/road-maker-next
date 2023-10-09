import { Drawer } from "@mantine/core";
//@ts-ignore
const NodeDetail = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Drawer
        opened={isOpen}
        onClose={() => setIsOpen(false)}
        position="right"
        keepMounted
        closeOnEscape
        lockScroll={false}
      >
        drawer
      </Drawer>
    </>
  );
};
export default NodeDetail;
