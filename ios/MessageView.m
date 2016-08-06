//
//  MessageView.m
//  iOSNativeManagerDemo
//
//  Created by CookieJ on 16/8/6.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MessageView.h"
#import "MessageViewController.h"

#define SCREEN_W [UIScreen mainScreen].bounds.size.width
#define SCREEN_H [UIScreen mainScreen].bounds.size.height

@interface MessageView ()

@property (nonatomic, strong) MessageViewController * messageVC;

@end

@implementation MessageView

- (instancetype)init {
    if (self = [super init]) {
        MessageViewController * messageVC = [[MessageViewController alloc] init];
        self.messageVC = messageVC;
        [self addSubview:messageVC.view];
    }
    return self;
}

@end
