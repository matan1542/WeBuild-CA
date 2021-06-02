

import React from 'react'

import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

export function WapImg({
    onClickFunc,
    cmp,
    onDeleteCmp,
    onCmpFocus,
    onUpdateCurrCmp,
    isEdit
}) {
    if (!isEdit) {
        return (
            <div className="wap-el publish">
                <img
                    className="wap-img publish"
                    src={cmp.info.src} style={cmp.info.style} alt="img"
                />
            </div>
        )
    }
    return (
        <div className="wap-el">
            <img onClick={(ev) => {
                onCmpFocus(ev, cmp);
                ev.target.onFocus = true;
            }}
                className="wap-img"
                src={cmp.info.src} style={cmp.info.style} alt="img"
            />
            <button className="wap-el-btn-del" onClick={() => onDeleteCmp(cmp.id)}>
                <DeleteForeverOutlinedIcon />
            </button>
        </div>
    )
}
