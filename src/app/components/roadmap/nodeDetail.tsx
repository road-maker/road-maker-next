import { Drawer } from "@mantine/core";
import { Highlight } from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
//@ts-ignore
const NodeDetail = ({ isOpen, setIsOpen, nodeDetail }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Youtube.configure({
        inline: false,
        ccLanguage: "ko",
        interfaceLanguage: "ko",
      }),
      Underline,
      Link,
      Superscript,
      Subscript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    editable: false,
    content: nodeDetail?.detailedContent,
  });
  if (nodeDetail?.detailedContent && editor)
    editor.commands.setContent(nodeDetail?.detailedContent);
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
        {nodeDetail?.detailedContent ? (
          <EditorContent
            editor={editor}
            readOnly
            style={{ lineHeight: "1.8rem" }}
          />
        ) : (
          "상세내용이 없습니다."
        )}
      </Drawer>
    </>
  );
};
export default NodeDetail;
