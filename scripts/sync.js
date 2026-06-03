const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://blog.csdn.net/m0_58782205';

console.log('开始请求 CSDN 主页:', url);

axios.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2'
  },
  timeout: 15000
}).then(res => {
  const $ = cheerio.load(res.data);
  const articles = [];

  const listItems = $('.article-list .article-item-box, .mainContent .article-list-item, article');
  console.log('匹配到文章节点数量:', listItems.length);

  listItems.each((i, el) => {
    if (i >= 3) return false;

    const title = $(el).find('h4 a, .title a, h2 a').first().text().replace(/[\r\n\s]+/g, ' ').trim() || '未命名文章';
    const link = $(el).find('h4 a, .title a, h2 a').first().attr('href') || '';
    const desc = $(el).find('.content, .description, .summary').first().text().replace(/[\r\n\s]+/g, ' ').trim().substring(0, 80) || '暂无摘要';

    let cover = $(el).find('.article-list-img img, .cover img, img').first().attr('src') || '';
    if (cover && cover.startsWith('//')) cover = 'https:' + cover;
    if (!cover) cover = 'https://g.csdnimg.cn/static/logo/favicon.reply.ico';

    const tags = [];
    $(el).find('.tag, .article-tag, .b-box').each((index, tagEl) => {
      const tagText = $(tagEl).text().trim();
      if (tagText && isNaN(tagText) && tagText.length < 10) {
        tags.push(tagText);
      }
    });

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
  console.log('成功生成 csdn_articles.json，文章数量:', articles.length);
}).catch(err => {
  console.error('抓取失败，触发安全保底机制:', err.message);
  if (!fs.existsSync('csdn_articles.json')) {
    fs.writeFileSync('csdn_articles.json', '[]');
  }
});
