#!/usr/bin/env bash
[ -f /etc/profile ] && . /etc/profile
nvm use stable
# 外网高速 proxy
export http_proxy=http://10.20.47.148:3128 https_proxy=http://10.20.47.148:3128

#--- 准备环境
DIR=`pwd`
OUTPUT="$DIR/output"

yarn install && yarn build
