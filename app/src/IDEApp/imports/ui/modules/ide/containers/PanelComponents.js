import React from 'react';
import EditorPanel from './EditorContainer';
import TerminalContainer from './TerminalContainer';
import SplitPane from 'react-split-pane';


const PanelComponents = ({ workspaceId}) => {

    return (
        <div className="panel-components raised-medium">
            <SplitPane defaultSize="60%" minSize={300} maxSize={-200} split="horizontal">
                <EditorPanel workspaceId={workspaceId} />
                <TerminalContainer  workspaceId={workspaceId} />
            </SplitPane>
        </div>
    )
};


export default PanelComponents;