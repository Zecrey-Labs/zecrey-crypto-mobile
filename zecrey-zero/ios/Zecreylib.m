// Zecreylib.m

#import "Zecreylib.h"
#import <Zecrey/Zecrey.h>
#import <objc/message.h>
@implementation Zecreylib

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue{
    return dispatch_get_main_queue();
}

/*
 the incoming string empty
 */
- (BOOL)stringIsEmpty:(NSString *)string{
    
    if (string == nil||string == NULL || [string isKindOfClass:[NSNull class]] || string.length == 0){
        return YES;
    }
    
    NSCharacterSet *set = [NSCharacterSet whitespaceAndNewlineCharacterSet];
    NSString *trimmedString = [string stringByTrimmingCharactersInSet:set];
    if (!trimmedString.length) {
        return YES;
    }
    return NO;
}

- (NSString *)classToJson:(id)className{
    
    //get all property and value
    unsigned int count;
    NSMutableDictionary * props = [NSMutableDictionary dictionary];
    objc_property_t * properties = class_copyPropertyList([className class], &count);
    for (int i = 0; i<count; i++) {
        objc_property_t proprity = properties[i];
        const char * name = property_getName(proprity);
        NSString * propertyName = [NSString stringWithUTF8String:name];
        id propertyvalue = [className valueForKey:propertyName];
        if (propertyvalue) {
            [props setValue:propertyvalue forKey:propertyName];
        }
    }
    free(properties);
    
    //transfer dictionary to json
    NSError * error ;
    NSMutableString * muStr = nil;
    NSString * jsonString = nil;
    NSData * data = [NSJSONSerialization dataWithJSONObject:props options:NSJSONWritingPrettyPrinted error:&error];
    if (error) {
        NSLog(@"%@",error.localizedDescription);
        return error.localizedDescription;
    }else{
        jsonString = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
        muStr = [NSMutableString stringWithString:jsonString];
    }
    NSRange range = {0,jsonString.length};
    [muStr replaceOccurrencesOfString:@" " withString:@"" options:NSLiteralSearch range:range];
    
    NSRange rangMu = {0,muStr.length};
    [muStr replaceOccurrencesOfString:@"\n" withString:@"" options:NSLiteralSearch range:rangMu];
    return muStr;
    
}


RCT_EXPORT_METHOD(elgamalRawDec:(NSString *)CStr skStr:(NSString *)skStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:CStr] || [self stringIsEmpty:skStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyElgamalRawDec(CStr, skStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}

RCT_EXPORT_METHOD(fromAddLiquiditySegmentJSON:(NSString *)segmentStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:segmentStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        ZecreyAddLiquiditySegment * result = ZecreyFromAddLiquiditySegmentJSON(segmentStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve([self classToJson:result]);
        }
    }
}

RCT_EXPORT_METHOD(fromRemoveLiquiditySegmentJSON:(NSString *)segmentStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:segmentStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        ZecreyRemoveLiquiditySegment * result =ZecreyFromRemoveLiquiditySegmentJSON(segmentStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve([self classToJson:result]);
        }
    }
}

RCT_EXPORT_METHOD(fromSwapSegmentJSON:(NSString *)segmentStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:segmentStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        ZecreySwapSegment * result =ZecreyFromSwapSegmentJSON(segmentStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve([self classToJson:result]);
        }
    }
}

RCT_EXPORT_METHOD(fromUnlockSegmentJSON:(NSString *)segmentStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:segmentStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        ZecreyUnlockSegment * result = ZecreyFromUnlockSegmentJSON(segmentStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve([self classToJson:result]);
        }
    }
}

RCT_EXPORT_METHOD(fromWithdrawSegmentJSON:(NSString *)segmentStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:segmentStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        ZecreyWithdrawSegment * result = ZecreyFromWithdrawSegmentJSON(segmentStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve([self classToJson:result]);
        }
    }
}

RCT_EXPORT_METHOD(proveAddLiquidity:(NSString *)segmentInfo resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:segmentInfo]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyProveAddLiquidity(segmentInfo, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}

RCT_EXPORT_METHOD(fromTransferSegmentJSON:(NSString *)segmentStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    // TODO: Implement some actually useful functionality
    if ([self stringIsEmpty:segmentStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyFromTransferSegmentJSON(segmentStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}

RCT_EXPORT_METHOD(getL2PublicKey:(NSString *)skStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    if ([self stringIsEmpty:skStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyGetL2PublicKey(skStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}

RCT_EXPORT_METHOD(proveRemoveLiquidity:(NSString *)segmentInfo resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    if ([self stringIsEmpty:segmentInfo]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyProveRemoveLiquidity(segmentInfo, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}

RCT_EXPORT_METHOD(proveSwap:(NSString *)segmentInfo resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    if ([self stringIsEmpty:segmentInfo]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyProveSwap(segmentInfo, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}

RCT_EXPORT_METHOD(proveTransfer:(NSString *)assetId gasFee:(NSString*)gasFee memo:(NSString*)memo segmentInfosStr:(NSString*)segmentInfosStr resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    if ([self stringIsEmpty:assetId] || [self stringIsEmpty:gasFee] || [self stringIsEmpty:segmentInfosStr]) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyProveTransfer([assetId longLongValue], [gasFee integerValue], memo, segmentInfosStr, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}

RCT_EXPORT_METHOD(proveUnlock:(NSString *)segmentInfo resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    if ([self stringIsEmpty:segmentInfo] ) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyProveUnlock(segmentInfo, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}
RCT_EXPORT_METHOD(proveWithdraw:(NSString *)segmentInfo resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    if ([self stringIsEmpty:segmentInfo] ) {
        reject(@"0",@"param not null",nil);
    }else{
        NSError * error = nil;
        NSString * result = ZecreyProveWithdraw(segmentInfo, &error);
        if (error) {
            reject(@"0",error.localizedDescription,nil);
        }else{
            resolve(result);
        }
    }
}


@end

