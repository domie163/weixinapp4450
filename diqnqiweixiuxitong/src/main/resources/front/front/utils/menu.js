const menu = {
	list() {
		return [{
				"backMenu": [],
				"frontMenu": [],
				"hasBackLogin": "是",
				"hasBackRegister": "否",
				"hasFrontLogin": "否",
				"hasFrontRegister": "否",
				"roleName": "管理员",
				"tableName": "users"
			},
			{
				"backMenu": [{
						"child": [{
							"appFrontIcon": "cuIcon-message",
							"buttons": [
								"查看"
							],
							"menu": "客服聊天",
							"menuJump": "列表",
							"tableName": "chat"
						}],
						"menu": "客服聊天"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "公告",
							"menuJump": "列表",
							"tableName": "gonggao"
						}],
						"menu": "公告"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-activity",
							"buttons": [
								"查看"
							],
							"menu": "新闻信息",
							"menuJump": "列表",
							"tableName": "news"
						}],
						"menu": "新闻信息"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看"
							],
							"menu": "物品维修订单",
							"menuJump": "列表",
							"tableName": "weixiudingdan"
						}],
						"menu": "物品维修订单"
					},
					{
						"child": [{
							"appFrontIcon": "cuIcon-form",
							"buttons": [
								"查看",
								"新增"
							],
							"menu": "物品维修预约",
							"menuJump": "列表",
							"tableName": "weixiuyuyue"
						}],
						"menu": "物品维修预约"
					}
				],
				"frontMenu": [],
				"hasBackLogin": "是",
				"hasBackRegister": "否",
				"hasFrontLogin": "是",
				"hasFrontRegister": "是",
				"roleName": "用户",
				"tableName": "yonghu"
			}
		]

	}
}
export default menu;
