const puppeteer = require('puppeteer');


const originPath = 'https://www.ixigua.com';// 页面请求地址
const savePath = './vidio';// 存放路径

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(originPath);
    downloadVideo();
    await browser.close();
})();

const downloadVideo = async video => {
    // 判断视频文件是否已经下载
    if (!fs.existsSync(`${savePath}/${video.title}.mp4`)) {
        await getVideoData(video.src, 'binary').then(fileData => {
            console.log('下载视频中：', video.title)
            savefileToPath(video.title, fileData).then(res =>
                console.log(`${res}: ${video.title}`)
            )
        })
    } else {
        console.log(`视频文件已存在：${video.title}`)
    }
}

function getVideoData(url, encoding) {
    return new Promise((resolve, reject) => {
        let req = http.get(url, function (res) {
            let result = ''
            encoding && res.setEncoding(encoding)
            res.on('data', function (d) {
                result += d
            })
            res.on('end', function () {
                resolve(result)
            })
            res.on('error', function (e) {
                reject(e)
            })
        })
        req.end()
    })
}

function savefileToPath(fileName, fileData) {
    let fileFullName = `${config.savePath}/${fileName}.mp4`
    return new Promise((resolve, reject) => {
        fs.writeFile(fileFullName, fileData, 'binary', function (err) {
            if (err) {
                console.log('savefileToPath error:', err)
            }
            resolve('已下载')
        })
    })
}