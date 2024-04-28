import { ReactNode, MouseEventHandler } from "react";
import { Editor } from "@tiptap/core";


export default function EditorButtons({
                                          editor,
                                          children,
                                          handleClick,
                                          toggleName,
                                          className,
                                          level,
                                          title,
                                      }) {
    return (
        <button
            type="button"
            title={title}
            onClick={handleClick}
            disabled={!handleClick}
            className={`${className} border rounded-lg py-2.5 px-[15px] ${
                editor.isActive(toggleName, level && { level: level })
                    ? "text-amber-200 border-amber-200"
                    : "text-white border-white"
            }`}
        >
            {children}
        </button>
    );
}
