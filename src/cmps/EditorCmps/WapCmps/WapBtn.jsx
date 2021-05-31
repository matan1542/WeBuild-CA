import React from "react";
import {EditBtn} from "../EditBtn"
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { EditorWapCmps } from "../EditorWapCmps";
 

export function WapBtn({
  onClickFunc,
  cmp,
  onDeleteCmp,
  onCmpFocus,
  onUpdateCurrCmp,
  wap,
  updateWap,
}) {
  // console.log('cmp',cmp)
  return (
    <div className="wap-el">
      {<EditBtn   cmp={cmp}
        onUpdateWap={() => { updateWap(wap) }}
        onUpdateCurrCmp={onUpdateCurrCmp}
        onCmpFocus={onCmpFocus}/>}
      <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
        <DeleteForeverOutlinedIcon />
      </button>
      {cmp.cmps && (
        <EditorWapCmps
          cmp={cmp}
          wap={wap}
          updateWap={updateWap}
          onCmpFocus={onCmpFocus}
          onUpdateCurrCmp={onUpdateCurrCmp}
          onDeleteCmp={onDeleteCmp}
        />
      )}
    </div>
  );
}
