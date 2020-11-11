const curl = require("curl");
const jsdom = require("jsdom");

const url = "https://en.m.uesp.net/wiki/Skyrim:Quest_Timing";

curl.get(url, null, (err, resp, body) => {
    if (resp.statusCode == 200) {
        parseData(body);
    }
    else {
        console.log("error while fetching url");
    }
});

function parseData(html) {
    const { JSDOM } = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);
    
    var questList = $(".mw-content-ltr")
    for(var i = 0; i < questList.length; i++) {
        var innerInfo = $(items[i]).children('.info');
        var questName = $($(innerInfo).find('a')[0]).html();
        console.log(i + " -> " + questName);
    }
}