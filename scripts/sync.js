const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// 关键：切换到 CSDN 的静态全量文章列表页，完美避开主页反爬和 401 鉴权
const url = 'https://blog.csdn.net/m0_58782205/article/list/1';

console.log('开始请求 CSDN 静态博文列表页:', url);

axios.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8'
  },
  timeout: 15000
}).then(res => {
  const $ = cheerio.load(res.data);
  const articles = [];
  
  // 匹配静态列表页的文章卡片元素
  const listItems = $('.article-list .article-item-box');
  console.log('从静态页成功匹配到文章节点数量:', listItems.length);

  if (listItems.length === 0) {
    console.error('⚠️ 仍然无法匹配到节点，可能遭遇了严格 IP 限制，请检查生成的 JSON 兜底状态。');
  }

  listItems.each((i, el) => {
    // 过滤掉 CSDN 自带的广告卡片
    if ($(el).attr('data-articleid') === undefined) return;
    if (articles.length >= 8) return false; // 取前 8 篇

    // 1. 提取标题与链接
    const titleEl = $(el).find('h4 a').first();
    let title = titleEl.text().replace(/[\r\n\s]+/g, ' ').trim() || '未命名文章';
    // 剥离 CSDN 的“原创/置顶”修饰文本
    title = title.replace(/^(置顶|原创|转载|翻译)\s*/, '').trim();
    
    const link = titleEl.attr('href') || '';

    // 2. 提取描述/摘要
    const desc = $(el).find('.content').text().replace(/[\r\n\s]+/g, ' ').trim().substring(0, 80) || '暂无摘要';
    
    // 3. 提取封面图
    let cover = $(el).find('.article-list-img img').first().attr('src') || '';
    if (cover && cover.startsWith('//')) cover = 'https:' + cover;
    if (!cover) cover = 'https://g.csdnimg.cn/static/logo/favicon.reply.ico';

    // 4. 提取文章分类标签
    const tags = [];
    $(el).find('.tag, .article-tag').each((index, tagEl) => {
      const tagText = $(tagEl).text().trim();
      if (tagText && isNaN(tagText) && tagText.length < 10) {
        tags.push(tagText);
      }
    });

    console.log(`第 ${articles.length + 1} 篇解析成功 -> 标题: ${title}`);

    articles.push({ 
      title, 
      link, 
      description: desc, 
      coverImage: cover, 
      tags: tags.length ? tags : ['技术分享'], 
      platform: 'CSDN' 
    });
  });

  fs.writeFileSync('csdn_articles.json', JSON.stringify(articles, null, 2));
  console.log('🎉 本地 csdn_articles.json 写入成功！');
}).catch(err => {
  console.error('💥 请求或解析失败:', err.message);
  if (!fs.existsSync('csdn_articles.json')) {
    fs.writeFileSync('csdn_articles.json', '[]');
  }
});