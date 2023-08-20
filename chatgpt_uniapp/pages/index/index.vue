<template>
    <view class="box">
        <view class="container">
            <view v-if="!isLogin" class="content">
                <loginpc/>
            </view>
            <view v-if="isLogin" class="content">
                <chatpc/>
            </view>
        </view>
    </view>
</template>
<script>
	import loginpc from "../subPack/loginpc.vue";
	import chatpc from "../subPack/chatpc.vue";
	import {
		mapGetters,
	} from 'vuex';
	import MemberPayPc from "@/components/member-pay-pc.vue";
	export default {
		components:{loginpc,chatpc,MemberPayPc},
		data() {
			return {
				payMemberPop: false,
			};
		},
		computed: {
			...mapGetters(['isLogin']),
		},
		mounted() {},
		methods:{
			payClose() {
				this.payMemberPop = false;
			},
			openMember(){
				this.payMemberPop = true
			},
		}
	}
</script>
<style lang="scss" scoped>
    .box {
        width: 100vw;
        height: 100vh;
        background-color: #f5f5f5; // A simple background color
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .content {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background-color: #ffffff;
        width: 60%;
        height: 100%;
        padding: 20px;
    }
</style>
