# 总览

唐池目前开放了所有只读的 API，包括：

* [算力数据](#/docs/share)
* [收益数据](#/docs/profit)
* [矿池运行数据](#/docs/pool)

与用户安全相关的写操作，如修改地址等目前暂无计划开放。

## URI

如无特别说明，所有 API 访问的 URI 前缀均为：

`https://www.tangpool.com/public/`

## 编码

对于需要使用 POST 提交数据的 API，统一使用 `ContentType: application/json`，**不接受 form 编码**。

所有 API 返回的数据均为 JSON 格式。

## 鉴权

除矿池数据相关的 API 以外，调用其他 API 时需要使用 AccessKey 验证用户身份。

### 如何获取 AccessKey

用户在登录唐池后，点击 设置 - 个人设置，即可在弹出页面中看到系统为您生成的 AccessKey。

**注意**：

AccessKey 是系统用于鉴权的主要方式，请不要泄露给其他用户。一旦发生泄露，请在设置页面重新生成新的 AccessKey。

### 请求中进行鉴权

API 使用 AccessKey 进行简单鉴权，使用时有两种方式提交：

1. 在 URL 中做为 querystring 的一部分提交：

        GET https://docs.tangpool.com/public/API?__access_key__=ACCESS_KEY

2. 添加在请求 Header 中添加 `X-Access-Key`：
        GET https://docs.tangpool.com/public/API

        X-Access-Key: ACCESS_KEY

## 返回异常

如果参数传入错误，服务器将报错，一个典型的返回内容如下：

    {
       "errorCode" : "INVALID_ARGUMENT",        --- 错误码
       "errorMsg" : "The dimension field is required.",     --- 错误信息
       "errorNumber" : 4    --- 错误编码
    }

访问错误时，HTTP 状态码一般为 400 或者 400 以上。