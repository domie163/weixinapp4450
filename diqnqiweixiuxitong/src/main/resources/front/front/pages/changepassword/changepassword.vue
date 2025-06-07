<template>
	<view>
		<view class="" style="width: 690rpx;height: 500rpx;border: 1px solid #333; border-radius: 20rpx;margin: 50rpx auto;">
			<view class="" style="width: 80%;margin: 15rpx auto;display: flex;justify-content: space-around;">
				<text>旧密码:</text><input v-model="ruleForm.jiumima" style="width: 70%;height: 60rpx;border: 1px solid #333;
				border-radius: 15rpx;padding-left: 10rpx;" stype="text" placeholder="请输入密码">
			</view>
			<view class="" style="width: 80%;margin:15rpx auto;display: flex;justify-content: space-around;">
				<text>新密码:</text><input v-model="ruleForm.xinmima" style="width: 70%;height: 60rpx;border: 1px solid #333;
				border-radius: 15rpx;padding-left: 10rpx;" stype="text" placeholder="请输入密码">
			</view>
			<view class="" style="width: 80%;margin: 15rpx auto;display: flex;justify-content: space-around;">
				<text>确认密码:</text><input v-model="ruleForm.querenmima" style="width: 70%;height: 60rpx;border: 1px solid #333;
				border-radius: 15rpx;padding-left: 10rpx;" type="text" placeholder="请输入密码">
			</view>
			<view class="" style="display: flex;justify-content: space-around;margin-top: 20rpx;">
				<!-- <view class="" style="width: 25%;border: 1px solid #333;border-radius: 15rpx;text-align: center;background-color: var(--publicSubColor);color: #fff;">
					取消
				</view> -->
				<view class="" style="width: 25%;border: 1px solid #333;border-radius: 15rpx;text-align: center;background-color: var(--publicMainColor);color: #fff;" @tap="tijiaoxuigai">
					提交
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm:{
					jiumima:'',
					xinmima:'',
					querenmima:'',
				}
			}
		},
		async onShow() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			 this.user = res.data
		},
		methods: {
			async tijiaoxuigai() {
				if(this.user.password!=this.ruleForm.jiumima){
					this.$utils.msg(`旧密码不能和原始密码一样`);
					return 
				}
				if(this.user.password==this.ruleForm.xinmima){
					this.$utils.msg(`新密码不能和旧密码一样`);
					return 
				}
				if(this.ruleForm.xinmima!=this.ruleForm.querenmima){
					this.$utils.msg(`新密码和确认密码不一致`);
					return 
				}
				this.user.password=this.ruleForm.querenmima
			        await this.$api.update(`yonghu`, this.user);
			   
			    uni.setStorageSync('pingluenStateState', true);
			    this.$utils.msgBack('密码修改成功,下次登录时生效');
			},
		}
	}
</script>

<style>

</style>
