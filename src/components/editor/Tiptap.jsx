'use client'
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list'
import Document from '@tiptap/extension-document' ;
import Paragraph from '@tiptap/extension-paragraph' ;
import Text from '@tiptap/extension-text';
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextStyle from "@tiptap/extension-text-style"
import Placeholder from '@tiptap/extension-placeholder'
import {  useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from "@tiptap/extension-text-align";
import Image from '@tiptap/extension-image'
import MenuBar from "@/components/editor/MenuBar";

const Tiptap = ({setHtmlContent}) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ["heading", "paragraph"],
                defaultAlignment: "left",
            }),
            // Color.configure({ types: [TextStyle, ListItem.name] }),
            TextStyle,
            Color,Document, Paragraph,Text,
            BulletList.configure({
                HTMLAttributes: {
                    class: 'list-disc'
                }
            }), ListItem,OrderedList.configure({
                HTMLAttributes: {
                    class: "list-decimal",
                    type: '1',
                }, ordered: true,
            }),Subscript,Superscript,Image.configure({
                HTMLAttributes: {
                    class: 'mx-auto h-auto',
                },
            }),
            Placeholder.configure({
                // Use a placeholder:
                placeholder: 'Write something …',
                // Use different placeholders depending on the node type:
                // placeholder: ({ node }) => {
                //   if (node.type.name === 'heading') {
                //     return 'What’s the title?'
                //   }

                //   return 'Can you add some further context?'
                // },
            })
        ],
    })
    if (!editor) {
        return null
    }

    const handleEditorChanges = () => {
        const html = editor?.getHTML();
        setHtmlContent(html) ;
        // const json = editor?.getJSON();
        // const text = editor?.getText();
        // console.log("Html ====>", html);
        // console.log("JSON ====>", json);
        // console.log("Text ====>", text);
    };

    if (!editor) {
        return null
    }

    return (
        <div>
            <div className="m-2  flex flex-wrap justify-center text-center gap-2">

                {/*    For color */}
                <input
                    type="color"
                    onInput={event => editor.chain().focus().setColor(event.target.value).run()}
                    value={editor.getAttributes('textStyle').color}
                    data-testid="setColor"
                    className="cursor-pointer"
                />
                <button
                type="button"
                    onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#958DF1'}) ? 'is-active bg-[#958DF1] text-white' : 'text-[#958DF1] ' } ` }
                    data-testid="setPurple"
                >
                    purple
                </button>
                <button
                type="button"
                    onClick={() => editor.chain().focus().setColor('#F98181').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#F98181'}) ? 'is-active bg-[#F98181] text-white' : 'text-[#F98181] ' } ` }
                    data-testid="setRed"
                >
                    red
                </button>
                <button
                type="button"
                    onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#FBBC88'}) ? 'is-active bg-[#FBBC88] text-white' : 'text-[#FBBC88] ' } ` }
                    data-testid="setOrange"
                >
                    orange
                </button>
                <button
                type="button"
                    onClick={() => editor.chain().focus().setColor('#FAF594').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#FAF594'}) ? 'is-active bg-[#FAF594] text-white' : 'text-[#FAF594] ' } ` }
                    data-testid="setYellow"
                >
                    yellow
                </button>
                <button
                type="button"
                    onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#70CFF8'}) ? 'is-active bg-[#70CFF8] text-white' : 'text-[#70CFF8] ' } ` }
                    data-testid="setBlue"
                >
                    blue
                </button>
                <button
                type="button"
                    onClick={() => editor.chain().focus().setColor('#94FADB').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#94FADB'}) ? 'is-active bg-[#94FADB] text-white' : 'text-[#94FADB] ' } ` }
                    data-testid="setTeal"
                >
                    teal
                </button>
                <button
                type="button"
                    onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
                    className={`border rounded p-1 ${editor.isActive('textStyle', {color: '#B9F18D'}) ? 'is-active bg-[#B9F18D] text-white' : 'text-[#B9F18D] ' } ` }
                    data-testid="setGreen"
                >
                    green
                </button>
                <button
                type="button"
                    onClick={() => editor.chain().focus().unsetColor().run()}
                    data-testid="unsetColor"
                >
                    Remove Color
                </button>



            </div>
            <div className="text-black border-2 border-white rounded-xl bg-background">
                <MenuBar editor={editor}/>
                <EditorContent className="border h-screen" editor={editor}/>
            </div>
            <button
                type="button"
                onClick={handleEditorChanges}
                className="w-auto p-2.5 text-center mx-auto bg-primary text-foreground border border-white rounded-md "
            >
                Save
            </button>


        </div>
    )
}

export default Tiptap