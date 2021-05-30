import { WapTxt } from "./WapTxt";
import { WapBtn } from "./WapBtn";
import { WapSection } from "./WapSection";
import { WapNav } from "./WapNav";

import { Component } from "react";
import { WapForm } from "./WapForm";
export class DynamicCmps extends Component {
  getCmp = () => {
    const {
      onCmpFocus,
      onUpdateCurrCmp,
      cmp,
      onDeleteCmp,
      idx,
      updateWap,
      wap,
    } = this.props;
    switch (cmp.type) {
      case "wap-section":
        return (
          <WapSection
            cmp={cmp}
            wap={wap}
            updateWap={updateWap}
            onCmpFocus={onCmpFocus}
            onUpdateCurrCmp={onUpdateCurrCmp}
            onDeleteCmp={onDeleteCmp}
            idx={idx}
          />
        );
      // case 'wap-form':
      //     return <WapForm cmp={cmp} onCmpFocus={onCmpFocus} onUpdateCurrCmp={onUpdateCurrCmp} onDeleteCmp={onDeleteCmp} />
      case "wap-nav":
        return (
          <WapNav
            cmp={cmp}
            wap={wap}
            updateWap={updateWap}
            onCmpFocus={onCmpFocus}
            onUpdateCurrCmp={onUpdateCurrCmp}
            onDeleteCmp={onDeleteCmp}
            idx={idx}
          />
        );
      case "wap-text":
        return (
          <WapTxt
            cmp={cmp}
            wap={wap}
            updateWap={updateWap}
            onCmpFocus={onCmpFocus}
            onUpdateCurrCmp={onUpdateCurrCmp}
            onDeleteCmp={onDeleteCmp}
          />
        );
      case "wap-btn":
        return (
          <WapBtn
            cmp={cmp}
            wap={wap}
            updateWap={updateWap}
            onCmpFocus={onCmpFocus}
            onDeleteCmp={onDeleteCmp}
            onUpdateCurrCmp={onUpdateCurrCmp}
          />
        );
        case "wap-form":
            return <WapForm/>
      default:
        return null;
    }
  };
  render() {
    return this.getCmp();
  }
}
