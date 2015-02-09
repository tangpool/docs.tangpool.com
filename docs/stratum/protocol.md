# Stratum 扩展协议
除了通用的 stratum 协议外，唐池还支持一些扩展协议，可使得挖矿系统工作的更加稳定、高效。支持的扩展协议有：

- mining.suggest_difficulty
- mining.suggest_target
- mining.suggest_nonce2_size

## mining.suggest_difficulty

`mining.suggest_difficulty` 用于矿机主动向矿池建议难度值，使得难度快速适配，有效减少难度调整波动带来的算力损失。

* 须在 `mining.subscribe` 之前调用
* Diff值必须为2的N次方，例如：2, 4, 8, ..., 512, 1024...
* 服务端无返回

请求示例

```
Client: {"id": 1, "method": "mining.suggest_difficulty", "params": [512]}
```


## mining.suggest_target

`mining.suggest_target` 功能类似 `mining.suggest_difficulty` ，只是形式不同。

* 须在 `mining.subscribe` 之前调用
* Target 对应的 Diff 值必须为2的N次方，例如：2, 4, 8, ..., 512, 1024...
* 服务端无返回

请求示例

```
# 带前缀"0x"
Client: {"id": 1, "method": "mining.suggest_target", "params": ["0x00000000000404CB000000000000000000000000000000000000000000000000"]}

# 也可不带前缀"0x"
Client: {"id": 1, "method": "mining.suggest_target", "params": ["00000000000404CB000000000000000000000000000000000000000000000000"]}
```


## mining.suggest_nonce2_size

`mining.suggest_nonce2_size` 用于向矿池建议`nonce2`的字节数。

* 须在 `mining.subscribe` 之前调用
* `nonce2` 字节数支持的大小有： `4, 5, 6, 7, 8`
* 服务端无返回


## 调用过程演示

将 `mining.suggest_nonce2_size`, `mining.suggest_difficulty` 一起调用。

```
Client: {"id": 0, "method": "mining.suggest_nonce2_size", "params": [8]}
        {"id": 1, "method": "mining.suggest_difficulty", "params": [512]}
        {"id": 2, "method": "mining.subscribe", "params": ["tang++/0.2.0"]}

Server: {"id":2,"result":[[["mining.set_difficulty","02a10782"],["mining.notify","02a10782"]],"02a10782",8],"error":null}

Client: {"id": 3, "params": ["panzhibiao.devtpp", "anything"], "method": "mining.authorize"}

Server: {"id":3,"result": true,"error":null}
        {"id":null,"method":"mining.set_difficulty","params":[512]}
        {"id":null,"method":"mining.notify","params":["918388","c9ca0afb6240789a3a75aad5a1dec29418f9875809c05cf50000000000000000","01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff2a03ea36052f54616e67706f6f6c2f70616e7a68696269616f2f616b736b2f","ffffffff01b6c74e95000000001976a9140fff4f59f8a910e5bd03bed534b5d43f40073aad88ac00000000",["3933147896c7c4e263c85ce02dd4faf71f7a0ab9b9a6a4e693e03eca26ab07c3","63144fb117857ee768698162df6cf51e7eb0b107a74ba41267f194e05c005292","321938ed8b340f5aa4bf186030e287477e6d620b543f6069da2ba609d8415d68","bf1ac52873be6aa2aae4621f5a67255dfebf486538e93f2edf53720063ae1a65","462dca5ca1081c8d12d82aa112453cd647cc655e938166cd9b2da2100160ac1a","9cdbffa24f4bcbcb44e98377c890d592bc1a50c376bce3f965e7c764e6d6bcda","3df01edb15f30c2e8dd7748ce2782fcc6e2546d0efa2d15fe5736fb8b0bc9fe5","683cdc5d5baff179c943e7def8c2e9b196c3e3a9fb2c203c6ce4118146611081","80ba0a2b49123f40b43efd725cc8142c0582865c23f4499850e930d576531422"],"00000002","181aa3c0","54d064a4",false]}
```
