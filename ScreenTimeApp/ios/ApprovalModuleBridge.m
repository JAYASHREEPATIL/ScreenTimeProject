#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ApprovalModule, NSObject)

RCT_EXTERN_METHOD(getApprovalStatus:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end