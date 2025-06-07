<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">维修编号</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.weixiudingdanUuidNumber" type="text" v-model="ruleForm.weixiudingdanUuidNumber" placeholder="维修编号"></input>
            </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">物品名称</view>
                <input   disabled
                         :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.weixiudingdanName" type="text" v-model="ruleForm.weixiudingdanName" placeholder="物品名称"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="weixiudingdanPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">物品照片</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.weixiudingdanPhoto" :src="baseUrl+ruleForm.weixiudingdanPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">维修类型</view>
                    <picker @change="weixiuyuyueTypesChange" :value="weixiuyuyueTypesIndex" :range="weixiuyuyueTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.weixiuyuyueTypes?ruleForm.weixiuyuyueValue:"请选择维修类型"}}</view>
                    </picker>
                </view>
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">维修价格</view>
                    <input   disabled
                             :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                             :disabled="ro.weixiudingdanBaojia" type="number" v-model="ruleForm.weixiudingdanBaojia" placeholder="维修价格"></input>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">维修时间</view>
                <input
                        :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                        v-model="ruleForm.yuyueTime" placeholder="维修时间" :readonly="ro.yuyueTime"
                        @tap="toggleTab('yuyueTime')"></input>
            </view>
					<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                      class="title">维修内容</view>
                <textarea :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.weixiudingdanContent" v-model="ruleForm.weixiudingdanContent" placeholder="维修内容"/>
            </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"100rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"var(--publicMainColor)","textAlign":"left"}'
                          class="title">维修状态</view>
                    <picker @change="weixiudingdanTypesChange" :value="weixiudingdanTypesIndex" :range="weixiudingdanTypesOptions" range-key="indexName">
                        <view
                                :style='{"padding":"0 24rpx","boxShadow":"0 10rpx 0px rgba(0,0,0,0)","margin":"0","borderColor":"var(--publicMainColor)","backgroundColor":"#fff","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 10rpx 2rpx","fontSize":"26rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.weixiudingdanTypes?ruleForm.weixiudingdanValue:"请选择维修状态"}}</view>
                    </picker>
                </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"var(--publicMainColor)","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="yuyueTimeConfirm"
                              ref="yuyueTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="insertTimeConfirm"
                              ref="insertTime" themeColor="#333333"></w-picker>
					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					weixiuyuanId: false,
					yonghuId: false,
					weixiudingdanUuidNumber: true,
					weixiudingdanName: false,
					weixiudingdanPhoto: false,
					weixiuyuyueTypes: false,
					weixiudingdanBaojia: false,
					yuyueTime: false,
					weixiudingdanContent: false,
					weixiudingdanTypes: false,
					insertTime: false,
					createTime: false,
        },
            ruleForm: {
					weixiuyuanId: '',
					yonghuId: '',
					weixiudingdanUuidNumber: this.getUUID(),//数字
					weixiudingdanName: '',
					weixiudingdanPhoto: '',
					weixiuyuyueTypes: '',//数字
					weixiuyuyueValue: '',//数字对应的值
					weixiudingdanBaojia: '',
					yuyueTime: '',
					weixiudingdanContent: '',
					weixiudingdanTypes: '',//数字
					weixiudingdanValue: '',//数字对应的值
					insertTime: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
				weixiuyuyueTypesOptions: [],
							weixiuyuyueTypesIndex : 0,
				weixiudingdanTypesOptions: [],
							weixiudingdanTypesIndex : 0,

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {

		/*下拉框*/
			let weixiuyuyueTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'weixiuyuyue_types',
            }
			let weixiuyuyueTypes = await this.$api.page(`dictionary`, weixiuyuyueTypesParams);
			this.weixiuyuyueTypesOptions = weixiuyuyueTypes.data.list
		/*下拉框*/
			let weixiudingdanTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'weixiudingdan_types',
            }
			let weixiudingdanTypes = await this.$api.page(`dictionary`, weixiudingdanTypesParams);
			this.weixiudingdanTypesOptions = weixiudingdanTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`weixiudingdan`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.weixiudingdanId){
                this.ruleForm.weixiudingdanId = options.weixiudingdanId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            weixiuyuyueTypesChange(e) {
                this.weixiuyuyueTypesIndex = e.target.value
                this.ruleForm.weixiuyuyueValue = this.weixiuyuyueTypesOptions[this.weixiuyuyueTypesIndex].indexName
                this.ruleForm.weixiuyuyueTypes = this.weixiuyuyueTypesOptions[this.weixiuyuyueTypesIndex].codeIndex
            },
            weixiudingdanTypesChange(e) {
                this.weixiudingdanTypesIndex = e.target.value
                this.ruleForm.weixiudingdanValue = this.weixiudingdanTypesOptions[this.weixiudingdanTypesIndex].indexName
                this.ruleForm.weixiudingdanTypes = this.weixiudingdanTypesOptions[this.weixiudingdanTypesIndex].codeIndex
            },


            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },


			weixiudingdanPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.weixiudingdanPhoto = 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			// 日期控件
			yuyueTimeConfirm(val) {
                this.ruleForm.yuyueTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			insertTimeConfirm(val) {
                this.ruleForm.insertTime = val.result;
                this.$forceUpdate();
            },
			// 日期控件
			createTimeConfirm(val) {
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.weixiudingdanUuidNumber)) {
                    this.$utils.msg(`维修编号不能为空`);
                    return
                }
				if ((!this.ruleForm.weixiudingdanName)) {
                    this.$utils.msg(`物品名称不能为空`);
                    return
                }
				if ((!this.ruleForm.weixiudingdanPhoto)) {
                    this.$utils.msg(`物品照片不能为空`);
                    return
                }
				if ((!this.ruleForm.weixiuyuyueTypes)) {
                    this.$utils.msg(`维修类型不能为空`);
                    return
                }
				if ((!this.ruleForm.weixiudingdanBaojia) && (!this.$validate.isNumber(this.ruleForm.weixiudingdanBaojia)) && this.ruleForm.weixiudingdanBaojia >0) {
                    this.$utils.msg(`维修价格不能为空，不能小于0 格式为数字或小数`);
                    return
                }
				if ((!this.ruleForm.yuyueTime)) {
                    this.$utils.msg(`维修时间不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`weixiudingdan`, this.ruleForm);
                } else {
                    await this.$api.save(`weixiudingdan`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .cu-form-group .title {
        height: auto;
        line-height:30rpx
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 80rpx;
    }

    .select .uni-input {
        line-height: 80rpx;
    }

    .input .right-input {
        line-height: 88rpx;
    }
</style>