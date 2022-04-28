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

  static elgamalRawDec (CStr,skStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.elgamalRawDec(CStr,skStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static fromAddLiquiditySegmentJSON (segmentStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.fromAddLiquiditySegmentJSON(segmentStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static fromRemoveLiquiditySegmentJSON (segmentStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.fromRemoveLiquiditySegmentJSON(segmentStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static fromSwapSegmentJSON (segmentStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.fromSwapSegmentJSON(segmentStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static fromUnlockSegmentJSON (segmentStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.fromUnlockSegmentJSON(segmentStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static fromWithdrawSegmentJSON (segmentStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.fromWithdrawSegmentJSON(segmentStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static proveAddLiquidity (segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.proveAddLiquidity(segmentInfo)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static fromTransferSegmentJSON (segmentStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.fromTransferSegmentJSON(segmentStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static getL2PublicKey (skStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.getL2PublicKey(skStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static proveRemoveLiquidity (segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.proveRemoveLiquidity(segmentInfo)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static proveSwap (segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.proveSwap(segmentInfo)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static proveTransfer (assetId,gasFee,memo,segmentInfosStr){
    return new Promise((resolve, reject)=>{
      Zecreylib.proveTransfer(assetId,gasFee,memo,segmentInfosStr)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static proveUnlock (segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.proveUnlock(segmentInfo)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }

  static proveWithdraw (segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.proveWithdraw(segmentInfo)
        .then((result)=>{
          resolve(result)
        }).catch((error)=>{
        reject(error)
      })
    })
  }
}

export default ZecreyLibModules;
