// ZecreylibModule.java
package com.reactlibrary;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Callback;;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;

import zecrey.AddLiquiditySegment;
import zecrey.RemoveLiquiditySegment;
import zecrey.SwapSegment;
import zecrey.UnlockSegment;
import zecrey.WithdrawSegment;
import zecrey.Zecrey;

public class ZecreylibModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext mReactContext;
    private WritableMap mResponse;
    public ZecreylibModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mReactContext = reactContext;
    }

    @Override
    public String getName() {//Zecreylib  ZecreyModule
        return "Zecreylib";
    }

    private boolean strIsEmpty(String s){
        if(s == null || "".equals(s) ){
             return true;
        }
        return false;
    }

    @ReactMethod
    public void elgamalDec(String CStr, String skStr, String start, String end,Callback callback){
        //public static native long elgamalDec(String CStr, String skStr, long start, long end) throws Exception;
        mResponse = Arguments.createMap();
        long lvar = 0L;
        if (strIsEmpty(CStr)== true || strIsEmpty(skStr)== true || strIsEmpty(start)== true || strIsEmpty(end)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.elgamalDec(CStr,skStr,Long.getLong(start),Long.getLong(end));
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});

    }

    @ReactMethod
    public void elgamalEnc(String pkStr, String b,Callback callback){
        //public static native String elgamalEnc(String pkStr, long b) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(pkStr)== true || strIsEmpty(b)== true  ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.elgamalEnc(pkStr,Long.getLong(b));
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void elgamalRawDec(String CStr, String skStr,Callback callback){
        //public static native String elgamalRawDec(String CStr, String skStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(CStr)== true || strIsEmpty(skStr)== true  ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.elgamalRawDec(CStr,skStr);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void fromAddLiquiditySegmentJSON(String segmentStr,Callback callback){
        //public static native AddLiquiditySegment fromAddLiquiditySegmentJSON(String segmentStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentStr)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                AddLiquiditySegment wds = Zecrey.fromAddLiquiditySegmentJSON(segmentStr);
                lvar = new Gson().toJson(wds);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void fromRemoveLiquiditySegmentJSON(String segmentStr,Callback callback){
        //public static native RemoveLiquiditySegment fromRemoveLiquiditySegmentJSON(String segmentStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentStr)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                RemoveLiquiditySegment wds = Zecrey.fromRemoveLiquiditySegmentJSON(segmentStr);
                lvar = new Gson().toJson(wds);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }

//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void fromSwapSegmentJSON(String segmentStr,Callback callback){
        //public static native SwapSegment fromSwapSegmentJSON(String segmentStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentStr)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                SwapSegment wds = Zecrey.fromSwapSegmentJSON(segmentStr);
                lvar = new Gson().toJson(wds);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void fromUnlockSegmentJSON(String segmentStr,Callback callback){
        //public static native UnlockSegment fromUnlockSegmentJSON(String segmentStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentStr)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                UnlockSegment wds = Zecrey.fromUnlockSegmentJSON(segmentStr);
                lvar = new Gson().toJson(wds);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void fromWithdrawSegmentJSON(String segmentStr,Callback callback){
        //public static native WithdrawSegment fromWithdrawSegmentJSON(String segmentStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentStr)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                WithdrawSegment wds = Zecrey.fromWithdrawSegmentJSON(segmentStr);
                lvar = new Gson().toJson(wds);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void proveAddLiquidity(String segmentInfo,Callback callback){
        ////public static native String proveAddLiquidity(String segmentInfo) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentInfo)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.proveAddLiquidity(segmentInfo);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void fromTransferSegmentJSON(String segmentStr,Callback callback){
        //public static native String fromTransferSegmentJSON(String segmentStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentStr)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.fromTransferSegmentJSON(segmentStr);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void getL2PublicKey(String skStr,Callback callback){
        //public static native String getL2PublicKey(String skStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(skStr)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.getL2PublicKey(skStr);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void proveRemoveLiquidity(String segmentInfo,Callback callback){
        //public static native String proveRemoveLiquidity(String segmentInfo) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentInfo)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.proveRemoveLiquidity(segmentInfo);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void proveSwap(String segmentInfo,Callback callback){
        //public static native String proveSwap(String segmentInfo) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentInfo)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.proveSwap(segmentInfo);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void proveTransfer(String assetId, String gasFee, String memo, String segmentInfosStr,Callback callback){
        //public static native String proveTransfer(long assetId, long gasFee, String memo, String segmentInfosStr) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(assetId)== true || strIsEmpty(gasFee)== true || strIsEmpty(memo)== true || strIsEmpty(segmentInfosStr)== true){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.proveTransfer(Long.getLong(assetId),Long.getLong(gasFee),memo,segmentInfosStr);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void proveUnlock(String segmentInfo,Callback callback){
        //public static native String proveUnlock(String segmentInfo) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentInfo)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.proveUnlock(segmentInfo);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }

    @ReactMethod
    public void proveWithdraw(String segmentInfo,Callback callback){
        //public static native String proveWithdraw(String segmentInfo) throws Exception;
        mResponse = Arguments.createMap();
        String lvar = "";
        if (strIsEmpty(segmentInfo)== true ){
            mResponse.putInt("bflag",0);
            mResponse.putString("err", "param not null");
        }
        else{
            try{
                lvar = Zecrey.proveWithdraw(segmentInfo);
                mResponse.putInt("bflag",1);
                mResponse.putString("ret", lvar+"");
            }catch(Exception ex){
                ex.printStackTrace();
                mResponse.putInt("bflag",0);
                mResponse.putString("err", "api error");
            }
        }
//        callback.invoke(mResponse);
        callback.invoke(new Object[]{mResponse.getInt("bflag"), mResponse.hasKey("ret")==true?mResponse.getString("ret"):mResponse.getString("err")});
    }
        
}
