# tang++ 配置文件详解

```
#
# Config for Tang++
#
# @copyright Tangpool.com
# @since 2014-07
#


####################################################
# agent settings
####################################################
#
#
# 请登录tangpool.com查看
# 置零则不上报状态数据
#
tangpool.agent.id=0


####################################################
# pool settings
####################################################
#
# 最多可以设置32组矿池。最前面的矿池，拥有最高优先级。
# 工作模式：若当前上行矿池连接出问题了，则按照顺序逐个尝试连接。
#
# poolx.user.name         : 矿池用户名
# poolx.worker.name       : 矿工名
# poolx.worker.name.split : 矿池用户名与矿工名之间的分隔符. 大部分矿池均为'.'。
#                           btcguild为'_'，请注意更换。btcguild对矿工名长度限制比较严格，
#                           请尽量使用短矿工名
# poolx.stratum.host      : 矿池stratum服务器地址
# poolx.stratum.port      : 矿池stratum服务器端口
#
# poolx.suggest.difficulty: 建议难度值, 该值可以估算为: 本agent内部总算力(单位Ghs)，该值
#                           不影响挖矿，只是减少接入矿池瞬间的算力波动。也可以直接置为默认值,
#                           若agent下算力低于1T，请置为128.
#                           警告：值必须满足2的N次方.本参数当前只有在上行矿池为tangpool时有效
# 
pool1.enable=true
pool1.user.name=
pool1.worker.name=
pool1.worker.name.split=.
pool1.stratum.host=
pool1.stratum.port=
pool1.suggest.difficulty=4096

#
# 矿池pool2
#
pool2.enable=true
pool2.user.name=
pool2.worker.name=
pool2.worker.name.split=.
pool2.stratum.host=
pool2.stratum.port=
pool2.suggest.difficulty=4096

#
# 矿池pool3
#
pool3.enable=false
pool3.user.name=
pool3.worker.name=
pool3.worker.name.split=.
pool3.stratum.host=
pool3.stratum.port=
pool3.suggest.difficulty=4096


####################################################
# stratum settings
####################################################
#
# server监听地址，默认: 0.0.0.0
#
stratum.server.host=0.0.0.0
#
# server监听端口，默认：3333
#
stratum.server.port=3333
#
# 最多矿机连接数，与机器硬件有关，依次是是：CPU/Memory/Bandwidth
#
stratum.server.maxsession=10000
#
# 工作线程数量，建议为: CPU Core Num * 2.  默认：8, 八核以上机器可以设置为16
#
stratum.threads=8
#
# 工作模式，可以选值：1, 2, 3
#   1: 单机算力<= 287T，代理最大矿机连接数量为 250 台
#   2: 单机算力<= 2T，代理最大矿机连接数量为 65000 台
#   3. 单机算力、矿机数量均不受限制，要求上行矿池支持extraNonce2Size=8
#      若上行矿池为tangpool，则设置为3. 此时agent下的矿机数量上线由运行
#      agent的机器性能决定
#
stratum.type=1

#
# 是否开启Debug模式，当开启时，会忽略日志等级设置，强制设置为：LOG_LEVEL_DEBUG
# Debug是否开启会影响所有 debug.* 选项
# value: true / false
debug=false
#
# 开启打印Stratum通信记录
# value: true / false
debug.dump.stratum=false
#
# 开启protobuf debug模式
#
debug.protobuf=false

#
# 日志等级
#  DEBUG = 0, INFO = 1, WARN = 2, ERROR = 2, FATAL = 3
#
log.level=1

#
# 矿场内部最小diff值. 例如：矿机在芯片层面过滤了Diff在64一下的nonce，则至少设置为64。
# 该值收到上层矿池的diff限制，不得超过其值
# !!! 警告：值必须满足2的N次方 !!!
#
session.min_diff=64

#
# 上行矿池的连接数，该值不得超过工作线程数(stratum.threads)
# 若超过会自动降低为stratum.threads
# @default: 4
#
upsession.multi.number=4

#
# max submit nonce number per second
# 每秒最大上传nonce的个数
# @default: 30
upsession.max.nps=30

#
# 上行矿池超时时间，有效行为：1. 收到新job 2. 成功提交了nonce（收到accepted响应）
# 多路连接同样按照此超时时间来判断是否与矿池失去连接，或者矿池可连接但工作异常
# @default: 120
upsession.timeout.seconds=120

#
# 主矿池故障后，尝试间隔时间. 
# @default: 600, unit: seconds
#
primarypool.reconnect.interval=600

#
# 状态数据等
#
tangpool.agent.server=tcp://agent.tangpool.com:3344

#
# diff controler
#
# 默认单位时间内Shares数量的比率关系。 > 1.0 更加频繁, < 1.0 更加稀疏
#
expect.sharenum.ratio=2.0

#
# 数据文件存放目录
# 默认为当前二进制运行的目录
#
#data.dir=
```
