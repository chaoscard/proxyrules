/*
 * 翼支付开屏广告处理脚本
 */
let obj = JSON.parse($response.body);

if (obj.result) {
    [span_0](start_span)[span_1](start_span)// 抹除抓包到的广告数据[span_0](end_span)[span_1](end_span)
    obj.result.openAds = null; 
    obj.result.mallAds = null;
    obj.result.externalAdvInfo = null;
    [span_2](start_span)// 保持 success 状态为 true 以免 App 报错[span_2](end_span)
    obj.success = true; 
}

$done({ body: JSON.stringify(obj) });
