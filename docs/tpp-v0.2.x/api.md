# tang++ 0.2.x API

`tang++` 会将状态信息生成至特定目录，便于管理者查看:

```
$ ls -l /root/tangpool/tpp_3333/www
-rw-rw-r-- 1 root root 326 Jan 30 06:27 found_blks.json
-rw-rw-r-- 1 root root 209 Jan 30 06:27 found_blks.txt
-rw-rw-r-- 1 root root 478 Jan 30 09:52 workers.json
-rw-rw-r-- 1 root root 229 Jan 30 09:52 workers.txt
```

`txt`后缀表示对应的文本格式。

Nginx配置示例：

```
server {
    listen 8080;
    root /root/tangpool/tpp_3333/www;
    autoindex on;
}
```

## 格式说明

通常，时区均为`UTC+0`，时间字段会用数组表示，第一个为字符串，第二个为 Timestamp。

假设安装`tang++`的服务器地址为: `192.168.0.11`，端口：`8080`。

### found_blks.json

`found_blks.json`记录本次启动后发现的块数据。示例：

```
$ curl http://192.168.0.11:8080/found_blks.json
{
    "file_update_time": [
        "2015-01-30 06:27:21",
        1422599241
    ],
    "blocks_count": 1,
    "blocks": [
        {
            "hash": "000000000000003b66da2e91c4acd527d14ec28eb6cea0d5f5ce59219baad646",
            "previous_hash": "00000000250b30fca0551241d5633be3418a74c0ae6410380c273d4e72355c54",
            "found_by": "192.168.1.254",
            "found_time": [
                "2015-01-30 06:27:21",
                1422599241
            ]
        }
    ]
}
```

### workers.json

`workers.json`记录当前`tang++`中的矿机数量及多个维度的算力数据。示例：

```
$ curl http://192.168.0.11:8080/workers.json
{
    "file_update_time": [
        "2015-01-30 09:56:27",
        1422611787
    ],
    "workers_count": 3,
    "workers": [
        {
            "ip": "192.168.1.15",
            "last_share_time": [
                "2015-01-30 09:56:26",
                1422611786
            ],
            "hashrate": {
                "1m": 659.707,
                "5m": 1326.744,
                "15m": 1236.34
            }
        },
        {
            "ip": "192.168.1.30",
            "last_share_time": [
                "2015-01-30 09:21:33",
                1422609693
            ],
            "hashrate": {
                "1m": 0,
                "5m": 0,
                "15m": 0
            }
        },
        {
            "ip": "192.168.1.254",
            "last_share_time": [
                "2015-01-30 07:36:51",
                1422603411
            ],
            "hashrate": {
                "1m": 0,
                "5m": 0,
                "15m": 0
            }
        }
    ]
}
```