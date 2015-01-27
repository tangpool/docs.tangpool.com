# 收益数据

获取用户在唐池的历史收益数据。

## 获取收益数据概览

`GET /profit/`

### 参数

无。

### 返回值

    {
       "total_payout" : 0.020001,       --- 支付总额
       "today_profit" : 27.00954142,    --- 总收益
       "total_balance" : 217.77072623   --- 当前待支付余额
    }








## 获取支付历史

`GET /profit/transaction/`

### 参数

|名称|类型|说明|
|---|----|----|
|page|int|可选，页码，默认为 1。|

### 返回值

    {
       "current_page" : 1,      --- 当前页码
       "per_page" : 15,         --- 每页大小
       "total" : 3,             --- 总条目数
       "from" : 1,              --- 当前页包含条目的起始 id
       "to" : 3,                --- 当前页包含条目的终止 id
       "last_page" : 1,         --- 最后一页的页码
       "data" : [
          {
             "amount" : 0.01,       --- 支付总额
             "payout_percent" : "100",      --- 支付百分比
             "ymd" : "2015-01-07",      --- 支付日期
             "payout_address" : "1M5bZmBwmGRxpxHgZG7FfBMT2Pz8HEVFrFx",      --- 收款地址
             "user_id" : "18",      --- 用户 id
             "tx_id" : "fe4fe4f5a6af69a6e01a7116685bc8c68129b01d5c92a5b865730e2885e70a66",      --- 支付 transaction id
             "share_unit" : "T",        --- 格式化后的算力单位
             "share_avg" : "3.285"      --- 当日平均算力
          }
       ]
    }
