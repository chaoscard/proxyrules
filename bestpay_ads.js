// 翼支付开屏去广告脚本
let obj = JSON.parse($response.body);

if (obj.result) {
    // 将广告对象清空
    obj.result.openAds = null;
    obj.result.mallAds = null;
    obj.result.externalAdvInfo = null;
}

// 返回成功请求到广告对象且无报错
    obj.success = true;
    obj.errorCode = null;
    obj.errorMsg = null;
$done({body: JSON.stringify(obj)});
