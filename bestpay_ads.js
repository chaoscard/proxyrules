// 翼支付开屏去广告脚本
let obj = JSON.parse($response.body);

if (obj.result) {
    // 将广告对象清空
    obj.result.openAds = null;
    obj.result.mallAds = null;
    obj.result.externalAdvInfo = null;
}

$done({body: JSON.stringify(obj)});

