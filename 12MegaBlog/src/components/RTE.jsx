import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=""}){
    return(
       <div className="w-full">
        {label && <label className="inline-block mb-1 pl-1">{label}</label>}
        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}})=>(
            <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      initialValue="<p>Start writing here...</p>"
      init={{
        height: 500,
        menubar: true,
        branding: false,

        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "image",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          "code",
          "fullscreen",
        ],

        toolbar:
          "undo redo | blocks | bold italic underline strikethrough | " +
          "alignleft aligncenter alignright alignjustify | " +
          "bullist numlist | outdent indent | " +
          "link image media table | codesample | code fullscreen",

        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
      }}
      onEditorChange={onChange}
    />
        )}
        />
        </div>
    )
}