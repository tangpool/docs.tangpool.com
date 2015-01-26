### 文档维护
 
- Github: [https://github.com/tangpool/docs.tangpool.com](https://github.com/tangpool/docs.tangpool.com)
- CNAME: `docs.tangpool.com` -> `docs-tangpool-com.oss.aliyuncs.com`
- Aliyun OSS Bucket: `docs-tangpool-com`
- Run Local
  - `cd docs.tangpool.com`
  - `python -m SimpleHTTPServer`
- 上传阿里云之后，后缀名为`md`需要设置HTTP头
  - `Content-Type`: `application/octet-stream`