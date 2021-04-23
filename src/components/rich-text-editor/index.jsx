import React, { Component } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "./index.less"

export default class RichTextEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    

    getDetail = () => {
        return draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    }

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="rich-text-wrapper"
                    editorClassName="rich-text-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                    disabled
                    className="rich-text-wrapper"
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
        )
    }
}

