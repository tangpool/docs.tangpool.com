#!/bin/bash

BUILD=output
BUCKET=docs-tangpool-com

if ! which osscmd >/dev/null 2>&1; then
    echo '找不到 osscmd，请检查是否安装。'
    exit 1
fi

if [[ ! -e "$BUILD" ]]; then
    echo '找不到产出文件'
    exit 1
fi

osscmd uploadfromdir "$BUILD" oss://"$BUCKET" --check_md5 --thread-num=20 --replace=false