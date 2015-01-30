# tang++ 0.2.x 安装文档

适用于Linux Ubuntu 12.04 / 14.04 以上。技术支持：`support@tangpool.com`。

## 一、安装

### 1. 切换至root

非root用户建议切换至`root`进行安装。

```
sudo -s
```

### 2. 安装tang++

默认目录：`/root/tangpool/tpp_3333`

```
$ mkdir -p /root/tangpool/tpp_3333
$ cd /root/tangpool/tpp_3333
$ wget http://tp-dev.oss-cn-beijing.aliyuncs.com/tpp/ubuntu/tang%2B%2B-v0.2.0.tar.gz
$ tar zxf tang++-v0.2.0.tar.gz
$ cp tang++-v0.2.0/* .
```

### 3. 安装supervise

supervise用于守护tang++进程，意外退出后可自动重启之。

```
$ apt-get install daemontools
```

### 4. 添加开机启动

执行命令：`vim /etc/rc.local`，添加如下内容：

```
nohup supervise /root/tangpool/tpp_3333/ &
```

注意：务必在`exit 0`之前。


### 5. 添加计划任务

执行命令：`crontab -e`，添加如下内容：

```
0 0 * * * bash /root/tangpool/tpp_3333/backup_log.sh
* * * * * bash /root/tangpool/tpp_3333/check_share_time.sh
```

### 6. 更新配置文件

编辑文件：`vim tpp.conf`，几个必要修改的参数：

#### 6.1. `tangpool.agent.id`

`tangpool.agent.id` 用于识别数据。获取步骤：`登录唐池` ->`设置` -> `个人设置` -> `Agent 管理` -> `创建 Agent`。

#### 6.2. `poolxx.xxx`矿池相关

上行矿池的配置，至少配置一个，强烈建议设置备用矿池，防止主矿池故障后损失算力。主矿池配置示例：

```
pool1.enable=true
pool1.user.name=panzhibiao
pool1.worker.name=devtpp
pool1.worker.name.split=.
pool1.stratum.host=s.tangpool.com
pool1.stratum.port=3333
pool1.suggest.difficulty=512
```

#### 6.3. `stratum.type`

`stratum.type` 用于设置 `tang++` 工作模式。可以选值：1, 2, 3。

值 | 单机最大算力 | 最多连接矿机数量
---|------------|--------------
 1 | 280 Ths | 250 台
 2 | 3 Ths | 65000 台
 3 | 无限制 | 无限制

模式`3`目前仅唐池支持。由于没有其他矿池支持，无法设置备用矿池，目前暂不建议设置。


## 二、管理

### 启动

```
nohup supervise /root/tangpool/tpp_3333/ &
```

### 关闭

```
$ cd /root/tangpool/tpp_3333
$ kill `cat tpp.pid`
```

### 关闭（连同supervise）

首先找到supervise进程

```
$ ps aux |grep supervise
root      4269  0.0  0.0   4168   428 pts/1    S    07:43   0:00 supervise /root/tangpool/tpp_3333/
root      5717  0.0  0.0   8076   648 pts/0    R+   08:28   0:00 grep --color=auto supervise
```

并杀掉

```
$ kill 4269
```

再杀掉`tang++`进程

```
$ cd /root/tangpool/tpp_3333
$ kill `cat tpp.pid`
```