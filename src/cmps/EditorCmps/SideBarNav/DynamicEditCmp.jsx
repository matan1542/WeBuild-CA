import { EditFontSize } from './EditorControler/EditFontSize'
import { EditLetterSpacing } from './EditorControler/EditLetterSpacing'
import { EditFontFamily } from './EditorControler/EditFontFamily'
import { EditColor } from './EditorControler/EditColor'
import { EditFlexDirection } from './EditorControler/EditFlexDirection'
import { EditBackgroundImg } from './EditorControler/EditBackgroundImg'
import { EditPadding } from './EditorControler/EditPadding'
import { EditJustifyContent } from './EditorControler/EditJustifyContent'
import { EditAlignContent } from './EditorControler/EditAlignContent'
import { EditAlignText } from './EditorControler/EditAlignText'
import {EditTextDecoration} from './EditorControler/EditTextDecoration'
import { EditTextShadow } from './EditorControler/EditTextShadow'
import { EditWidth } from './EditorControler/EditWidth'

export function DynamicEditCmp({ attribute, value, currCmp, onUpdateCurrCmp }) {
    // console.log(attribute, value)
    switch (attribute) {
        case "textAlign":
            return <EditAlignText onUpdateCurrCmp={onUpdateCurrCmp} att={attribute} currCmp={currCmp} />
        case "paddingInline":
            return <EditPadding att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "paddingBlock":
            return <EditPadding att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "fontSize":
            return <EditFontSize val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "fontFamily":
            return <EditFontFamily val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "color":
            return <EditColor att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "backgroundColor":
            return <EditColor att={attribute} val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "letterSpacing":
            return <EditLetterSpacing val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "flexDirection":
            return <EditFlexDirection val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "backgroundImage":
            return <EditBackgroundImg onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "justifyContent":
            return <EditJustifyContent val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "alignContent":
            return <EditAlignContent val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "textDecoration":
            return <EditTextDecoration onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp}/>
        case "textShadow":
            return <EditTextShadow val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        case "width":
            return <EditWidth val={value} onUpdateCurrCmp={onUpdateCurrCmp} currCmp={currCmp} />
        default: return null
    }
}

