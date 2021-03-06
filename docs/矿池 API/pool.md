# 矿池运行数据

获取矿池运行数据。

**注意**：矿池运行数据无需提供 AccessKey。

## 获取出块历史

`GET /pool/block/`

### 参数

|名称|类型|说明|
|---|----|----|
|page|int|可选，页码，默认为 1。|

### 返回值

    {
       "data" : [
          {
             "confirmed_blocks_count" : 12,     --- 确认数
             "running_duration" : 6924,     --- 运行时间
             "blk_height" : "319730",       --- 块高度
             "blk_rewards" : 25.00075,      --- 块奖励
             "blk_hash" : "000000000000011f6d551aa304cd9a2f9f130def1974e529ee4b078b60a6033e",       --- 块哈希
             "is_orphan" : "0",     --- 是否是孤块
             "blk_size" : "3963",   --- 块大小
             "created_at" : "2015-01-27 02:19:35"       --- 发现时间
          }
          ...
       ],
       "from" : 1,  --- 当前页包含条目的起始 id
       "to" : 15,   --- 当前页包含条目的终止 id
       "total" : 883,       --- 总条目数
       "per_page" : 15,     --- 每页大小
       "last_page" : 59,    --- 最后一页页码
       "current_page" : 1   --- 当前页面
    }



## 获取当前矿池系统正在工作的块信息

`GET /pool/block/latest/`

获取当前唐池系统正在工作的块信息，可以用于区块链分叉检测等。

### 参数

无。

### 返回值

    {
       "timestamp" : 1425454882,
       "created_at" : "2015-03-04 07:41:22",
       "latest_hash" : "00000000000001b8b0ae27b5c55747cda89cd58ffafdf9e15741526cf0f8788b",
       "latest_height" : "325042"
    }


## 获取矿池算力历史

`GET /pool/share/`

### 参数

|名称|类型|说明|
|---|----|----|
|dimension|str|必须，指定算力数据的时间维度，可选值为`(5m/15m/1h)`，分别对应 5 分钟、15 分钟、1 小时的算力数据|
|start_ts|int|必须，指定算力数据开始的时间戳；若为负数，则从调用时间减去该值做为返回数据的起始时间|
|count|int|必须，指定最多返回多少个时间点的数据，如果返回值在指定时间点没有数据，则为 null|

### 返回值

**注意**：share 字段下的时间戳，均为时间区间的**结束点**，而非**开始点**。

    {
        "unit" : "T",        --- 算力单位
        "share" : {
            "1421375400" : {        --- 该数据所在时间区间的结束时间戳
                "reject" : "0.029",  --- 拒绝值（即有效算力）
                "accept" : "1.477"   --- 接受值
            },
            "1421375460" : null     --- 该时间点暂无数据
        }
    }


## 获取矿池幸运值

`GET /pool/lucky/`

### 参数

|名称|类型|说明|
|---|----|----|
|start|int|必须，起始日期，格式为 `Ymd`|
|end|int|可选，终止日期，格式为 `Ymd`，默认为当前日期|

### 返回值

    {
       "20150117" : "8.6174"       --- 日期：幸运值
       ...
    }