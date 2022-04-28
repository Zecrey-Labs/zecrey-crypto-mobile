// main index.js

import {NativeModules} from 'react-native';

const {Zecreylib} = NativeModules;

class ZecreyLibModules {
    /* use demo,in promise
    ZecreyLibModules.getL2PublicKey("123").then((result)=>{
             console.log(result)
    }).catch((error)=>{
             console.log(error)
    })
    */
    static elgamalRawDec = (CStr: string, skStr: string) => Zecreylib.elgamalRawDec(CStr, skStr)
    static fromAddLiquiditySegmentJSON = (segmentStr: string) => Zecreylib.fromAddLiquiditySegmentJSON(segmentStr)
    static fromRemoveLiquiditySegmentJSON = (segmentStr: string) => Zecreylib.fromRemoveLiquiditySegmentJSON(segmentStr)
    static fromSwapSegmentJSON = (segmentStr: string) => Zecreylib.fromSwapSegmentJSON(segmentStr)
    static fromUnlockSegmentJSON = (segmentStr: string) => Zecreylib.fromUnlockSegmentJSON(segmentStr)
    static fromWithdrawSegmentJSON = (segmentStr: string) => Zecreylib.fromWithdrawSegmentJSON(segmentStr)
    static proveAddLiquidity = (segmentInfo: string) => Zecreylib.proveAddLiquidity(segmentInfo)
    static fromTransferSegmentJSON = (segmentStr: string) => Zecreylib.fromTransferSegmentJSON(segmentStr)
    static getL2PublicKey = (skStr: string) => Zecreylib.getL2PublicKey(skStr)
    static proveRemoveLiquidity = (segmentInfo: string) => Zecreylib.proveRemoveLiquidity(segmentInfo)
    static proveSwap = (segmentInfo: string) => Zecreylib.proveSwap(segmentInfo)
    static proveTransfer = (assetId: string, gasFee: string, memo: string, segmentInfosStr: string) => Zecreylib.proveTransfer(assetId, gasFee, memo, segmentInfosStr)
    static proveUnlock = (segmentInfo: string) => Zecreylib.proveUnlock(segmentInfo)
    static proveWithdraw = (segmentInfo: string) => Zecreylib.proveWithdraw(segmentInfo)

}

export default ZecreyLibModules;
