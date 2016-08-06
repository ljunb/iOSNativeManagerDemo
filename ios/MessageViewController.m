//
//  MessageViewController.m
//  iOSNativeManagerDemo
//
//  Created by CookieJ on 16/8/6.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "MessageViewController.h"
#import "ChatViewController.h"

#define SCREEN_W [UIScreen mainScreen].bounds.size.width
#define SCREEN_H [UIScreen mainScreen].bounds.size.height

@interface MessageViewController () <UITableViewDelegate, UITableViewDataSource>

@property (nonatomic, strong) NSMutableArray * dataSource;
@property (nonatomic, strong) UITableView * tableView;

@end

@implementation MessageViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self.view addSubview:self.tableView];
    [self.tableView registerClass:[UITableViewCell class] forCellReuseIdentifier:@"MessageCell"];
}


#pragma mark - Table view data source
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return self.dataSource.count;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  
    UITableViewCell * cell = [tableView dequeueReusableCellWithIdentifier:@"MessageCell"
                                                             forIndexPath:indexPath];
    if (!cell) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault
                                      reuseIdentifier:@"MessageCell"];
    }
  
    cell.textLabel.text = self.dataSource[indexPath.row];
  
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
  
    ChatViewController * chatVC = [[ChatViewController alloc] init];
  
    UIViewController * rootVC = [UIApplication sharedApplication].keyWindow.rootViewController;
  
    [rootVC presentViewController:chatVC animated:YES completion:nil];
}

#pragma mark - getter
- (NSMutableArray *)dataSource {
    if (!_dataSource) {
        _dataSource = [NSMutableArray new];
        for (NSInteger i = 0; i < 20; i++) {
            NSString * message = [NSString stringWithFormat:@"message%.2zd", i];
            [_dataSource addObject:message];
        }
    }
    return _dataSource;
}

- (UITableView *)tableView {
    if (!_tableView) {
        _tableView = [[UITableView alloc] init];
        _tableView.frame = CGRectMake(0, 0, SCREEN_W, SCREEN_H - 49 - 64);
        _tableView.bounces = NO;
        _tableView.dataSource = self;
        _tableView.delegate = self;
    }
    return _tableView;
}

@end
