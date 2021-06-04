import React from 'react'
import { WapImg } from './WapImg'

export function WapImgGallery({ cmp,
    onDeleteCmp,
    onCmpFocus,
    isEdit }) {
    if (!isEdit) {
        return (
            <ul className="clean-list flex wrap publish">
                { cmp.info.urls.map((url, idx) => {
                    return <li key={idx}> <WapImg cmp={cmp}
                        isEdit={isEdit} /></li>
                })}
            </ul>
        )
    }
    return (
        <>
            {cmp.cmps.map((cmp, idx) => {
                return <WapImg key={idx} cmp={cmp}
                    onDeleteCmp={onDeleteCmp}
                    onCmpFocus={onCmpFocus}
                    isEdit={isEdit} />
            })}
        </>
    )
}


