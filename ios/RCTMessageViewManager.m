//
//  RCTMessageViewManager.m
//  iOSNativeManagerDemo
//
//  Created by CookieJ on 16/8/6.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTMessageViewManager.h"
#import "MessageView.h"

@implementation RCTMessageViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
    return [MessageView new];
}

@end
