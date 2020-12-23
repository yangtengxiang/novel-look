module.exports = {
	mode:"webView",// file webView
	match: {
		novelName: /^.*\.txt$/, //小说名的正则匹配

		//  第一章 我要改变世界（上）
		chapterName: /1/, //匹配章节名称
	},
	ignoreDir: ["tmp"],
	ignoreFileName: [],
	openDirReadme: `请将电子书放在本文件所在目录
您可以在本文件上上方tab栏右键选择"在文件资源管理器中显示"
或是您直接将电子书的内容复制到本文件
目录地址: `,
	openDirFileName: "README.md",
	readSetting: {
		// 阅读设置
		lineSpace: 3, // 行与行之间以几个换行符分割
		lineIndent: 4,
		fontColor: "", //不知道能不能设置
	},
};
