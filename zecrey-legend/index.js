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






// native legend
  static getEddsaPublicKey_legend (seed){
    return new Promise((resolve, reject)=>{
      Zecreylib.getEddsaPublicKey(seed)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static computeAccountNameHash_legend (accountName, ){
    return new Promise((resolve, reject)=>{
      Zecreylib.computeAccountNameHash(accountName)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static getEddsaPublicKey_legend (accountName, ){
    return new Promise((resolve, reject)=>{
      Zecreylib.getEddsaPublicKey(accountName)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static generateEddsaKey_legend (accountName, ){
    return new Promise((resolve, reject)=>{
      Zecreylib.generateEddsaKey(accountName)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static getAccountNameHash_legend (accountName){
    return new Promise((resolve, reject)=>{
      Zecreylib.getAccountNameHash(accountName)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static keccakHash_legend (value){
    return new Promise((resolve, reject)=>{
      Zecreylib.keccakHash(value)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signAddLiquidity_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signAddLiquidity(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signAtomicMatch_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signAtomicMatch(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signCancelOffer_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signCancelOffer(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signCreateCollection_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signCreateCollection(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signMintNft_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signMintNft(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signOffer_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signOffer(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signRemoveLiquidity_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signRemoveLiquidity(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signSwap_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signSwap(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signTransfer_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signTransfer(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signTransferNft_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signTransferNft(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signWithdraw_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signWithdraw(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }

  static signWithdrawNft_legend (seed, segmentInfo){
    return new Promise((resolve, reject)=>{
      Zecreylib.signWithdrawNft(seed, segmentInfo)
          .then((result)=>{
            resolve(result)
          }).catch((error)=>{
        reject(error)
      })
    })
  }












}

export default ZecreyLibModules;
