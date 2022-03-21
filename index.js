// main index.js

import {NativeModules} from 'react-native';

const {Zecreylib} = NativeModules;

class ZecreyLibModules {

    /*
    callback params status
      if (resp.bflag=== 1)
     {console.warn("success",resp.ret)}
     else
     {console.warn("failure",resp.err)}
     */
    static elgamalRawDec = (CStr: string, skStr: string, callback: any) => Zecreylib.elgamalRawDec(CStr, skStr, callback)
    static fromAddLiquiditySegmentJSON = (segmentStr: string, callback: any) => Zecreylib.fromAddLiquiditySegmentJSON(segmentStr, callback)
    static fromRemoveLiquiditySegmentJSON = (segmentStr: string, callback: any) => Zecreylib.fromRemoveLiquiditySegmentJSON(segmentStr, callback)
    static fromSwapSegmentJSON = (segmentStr: string, callback: any) => Zecreylib.fromSwapSegmentJSON(segmentStr, callback)
    static fromUnlockSegmentJSON = (segmentStr: string, callback: any) => Zecreylib.fromUnlockSegmentJSON(segmentStr, callback)
    static fromWithdrawSegmentJSON = (segmentStr: string, callback: any) => Zecreylib.fromWithdrawSegmentJSON(segmentStr, callback)
    static proveAddLiquidity = (segmentInfo: string, callback: any) => Zecreylib.proveAddLiquidity(segmentInfo, callback)
    static fromTransferSegmentJSON = (segmentStr: string, callback: any) => Zecreylib.fromTransferSegmentJSON(segmentStr, callback)
    static getL2PublicKey = (skStr: string, callback: any) => Zecreylib.getL2PublicKey(skStr, callback)
    static proveRemoveLiquidity = (segmentInfo: string, callback: any) => Zecreylib.proveRemoveLiquidity(segmentInfo, callback)
    static proveSwap = (segmentInfo: string, callback: any) => Zecreylib.proveSwap(segmentInfo, callback)
    static proveTransfer = (assetId: string, gasFee: string, memo: string, segmentInfosStr: string, callback: any) => Zecreylib.proveTransfer(assetId, gasFee, memo, segmentInfosStr, callback)
    static proveUnlock = (segmentInfo: string, callback: any) => Zecreylib.proveUnlock(segmentInfo, callback)
    static proveWithdraw = (segmentInfo: string, callback: any) => Zecreylib.proveWithdraw(segmentInfo, callback)


}

export default ZecreyLibModules;
