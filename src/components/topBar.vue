<template>
    <div id="topBall">
        <div class="globalLogo">
            <slot name="logo">

            </slot>
        </div>
        <ul class="rightSide">
            <slot name="routeMenu">
                <li class="header-tab-item" v-for="item in routeMenu">
                    <div class="routeBtn" :class="{active:thisRoute(item.path)}"
                         @click="$router.push({name:item.routeName,query:item.query})">
                        <img class="icon" :src="item.src">
                        <span>{{item.name}}</span>
                    </div>
                </li>
            </slot>

            <li class="header-tab-end">
                <div class="routeBtn" @mouseenter="visiable = true" @mouseleave="visiable = false">
                    <div class="middle">
                        <img src="@datashow/images/admin.png">
                        <em>{{userData.name}}</em>
                        <Icon type="ios-arrow-down"/>
                    </div>

                    <div class="userEdit" v-show="visiable">
                        <div class="photo">
                            <div class="center">
                                <div class="Img">
                                    <img v-if="userData.fileUrl" :src="userData.fileUrl">
                                </div>
                                <div class="name">{{userData.name}}</div>
                            </div>
                        </div>
                        <div class="edit" @click="editPassword">修改密码</div>
                    </div>
                </div>
                <div class="out" @click="$router.push({name:'main'})">
                    <i class="iconfont iconkaiguan"></i>
                </div>
            </li>
        </ul>


        <el-dialog
                :visible="eidtable"
                custom-class="emDialog"
                width="500px"
                top="20vh"
                @close="eidtable = false"
        >
            <div class="title" slot="title">
                <div class="iconColumn"></div>
                修改密码
            </div>
            <div class="editContent">
                <div class="eqLine">
                    <div class="eqItem">
                        <div class="label">旧密码：</div>
                        <div class="text">
                            <Input type="password"
                                   :type="oldShow?'text':'password'"
                                   v-model="params.oldPwd"
                                   :icon="oldShow?'md-eye-off':'md-eye'"
                                   @on-click="oldShow=!oldShow"
                                   placeholder="请填写"
                                   style="width: 100%"
                            />
                        </div>
                    </div>
                </div>
                <div class="eqLine">
                    <div class="eqItem">
                        <div class="label">新密码：</div>
                        <div class="text">
                            <Input type="password"
                                   :type="newShow?'text':'password'"
                                   v-model="params.newPwd"
                                   :icon="newShow?'md-eye-off':'md-eye'"
                                   @on-click="newShow=!newShow"
                                   placeholder="请填写新密码"
                                   style="width: 100%"
                            />
                        </div>
                    </div>
                </div>
                <div class="eqLine">
                    <div class="eqItem">
                        <div class="label">新密码确认：</div>
                        <div class="text">
                            <Input type="password"
                                   :type="confirmShow?'text':'password'"
                                   v-model="confirmPassword"
                                   :icon="confirmShow?'md-eye-off':'md-eye'"
                                   @on-click="confirmShow=!confirmShow"
                                   placeholder="请填确认新密码"
                                   style="width: 100%"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div slot="footer">
                <Button type="primary" class="eqButton" @click="protect">确定</Button>
                <Button class="eqButton" @click="eidtable = false">取消</Button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import {Icon, Button, Input} from 'iview';
    import * as appApi from '@/api/app.ts'

    export default {
        name: "topBar",
        props: {
            routeMenu: {
                type: Array,
                default: [
                    /*{
                        name: '首页',
                        icon: '',
                        routeName: '首页',
                    },*/
                ]
            },
        },
        components: {
            Icon,
            Button,
            Input
        },
        data() {
            return {
                eidtable: false,
                visiable: false,
                userData: {
                    name: '用户管理',
                    account: ''
                },
                params: {
                    account: '',
                    oldPwd: '',
                    newPwd: '',
                },
                confirmPassword: '',
                oldShow: false,
                newShow: false,
                confirmShow: false,
            }
        },
        mounted() {

            if (sessionStorage.getItem('curUser')) {
                this.userData = JSON.parse(sessionStorage.getItem('curUser'))
                this.params.account = this.userData.account;
            } else {
                this.$nextTick(() => {
                    this.getCurUser();
                })
            }

        },
        methods: {

            async getCurUser() {
                let {data} = await appApi.getUserInformation();
                this.userData = data;
                this.params.account = this.userData.account;
            },
            thisRoute(path) {
                return this.$route.path.indexOf(path) > -1
            },
            editPassword() {
                this.eidtable = true;
                this.visiable = false;
                this.params.oldPwd = '';
                this.params.newPwd = '';
            },
            protect() {
                if (this.$utils.isntNull(
                    this.params,
                    {
                        "oldPwd": `旧密码`,
                        "newPwd": '新密码',
                    })) {
                    if (this.confirmPassword === '') {
                        this.$message({
                            showClose: true,
                            message: `请确认新密码！`,
                            type: 'warning'
                        })
                    }
                    else if (this.confirmPassword !== this.params.newPwd) {
                        this.$message({
                            showClose: true,
                            message: `新密码与认新密码不一致！`,
                            type: 'warning'
                        })
                    }
                    else {
                        this.changePassword()
                    }
                }
            },
            changePassword(){
                appApi.changePassword(this.params).then(()=>{
                    this.$message({
                        showClose: true,
                        message: `修改密码成功！`,
                        type: 'success'
                    })
                    this.eidtable = false;
                }).catch(e =>{
                    this.$message({
                        showClose: true,
                        message: `操作失败！`,
                        type: 'error'
                    })
                    this.eidtable = false;
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    #topBall {
        display: flex;
        height: 55px;
        background-color: #0a0d37;

        .globalLogo {
            width: 240px;
            display: flex;
            align-items: center;
            padding-right: 10px;

            .logo {
                max-width: 360px;
                max-height: 55px;
            }
        }

        .rightSide {
            width: calc(100% - 240px);
            display: flex;
            justify-content: flex-end;

            .header-tab-item, .header-tab-end {
                height: 100%;
                margin: 0 15px;

                .routeBtn {
                    width: 100%;
                    height: 100%;
                    color: #f6f6f6;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    user-select: none;
                    padding: 0 25px;

                    > img {
                        vertical-align: middle;
                        margin-right: 10px;
                    }

                    &.active {
                        background-color: #423b9d;
                        color: #ffffff;
                    }
                }
            }

            .header-tab-end {
                margin-right: 0;
                display: inline-flex;
                align-items: center;

                .routeBtn {
                    padding: 0;
                    width: calc(100% - 60px);
                    min-width: 140px;
                    position: relative;

                    .middle {
                        width: 100%;
                        padding: 0 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 30px;
                        border-right: 1px solid #eef0f3;

                        i {
                            margin: 2px 8px 0;
                        }

                        img {
                            width: 14px;
                            height: 16px;
                            margin-right: 10px;
                        }

                        em {
                            display: inline-flex;
                            max-width: 80px;
                        }
                    }

                    .userEdit {
                        position: absolute;
                        top: 55px;
                        left: 0;
                        width: 100%;
                        z-index: 9999;
                        background-color: rgba(17, 6, 78, 0.9);

                        .photo {
                            height: 120px;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            .center {
                                display: flex;
                                flex-direction: column;

                                .Img {
                                    width: 60px;
                                    height: 60px;
                                    border-radius: 50%;
                                    border: 2px solid #fff;
                                    margin-bottom: 10px;
                                    overflow: hidden;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }

                                .name {
                                    text-align: center;
                                    height: 20px;
                                    line-height: 20px;
                                    color: #fff;
                                }
                            }
                        }

                        .edit {
                            height: 50px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-top: 1px solid #373854;
                        }
                    }
                }

                .out {
                    cursor: pointer;
                    width: 60px;
                    height: 100%;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;

                    .iconfont {
                        font-size: 16px;
                        color: #fff;
                    }
                }
            }
        }

        .editContent {
            padding: 10px 20px 0 10px;

            .eqItem {
                padding-left: 0;

                .label {
                    width: 90px;
                }

                .text {
                    width: calc(100% - 90px);
                }
            }

            input {
                height: 30px;
                width: 100%;
            }
        }

    }
</style>

<style lang="scss">
    #topBall {
        .ivu-input {
            height: 32px;
        }
    }
</style>
