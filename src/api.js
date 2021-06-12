
import http from "@/utils/ajax/http"
import {extend} from "@/utils/extend"

const api = {
    code:{
        OK:0    },
    user:{
        login:'authLogin.do?ac=login',
        tokenLogin:'tokenLogin.do',
        logout: 'logout.do'
    },
    checkUpdate:'sh.do',
    editorPassword :'editPassword',
    checkField:'checkno.do',

        payment:'payment.do',

    collect:'collect.do',
    shoucangjilu: {
        listusername:"shoucangjilu_list2.do",
        delete:'shoucangjilu_delete'
    },
    captch(){
        var url = "captcha.do?rd="+Math.floor(Math.random()*100000);
        return new Promise((resolve, reject) => {
            http.get( url ).then(res=>{
                console.log(res);
                var url = res.data;
                resolve(url);
            },reject);
        });
    },
    search:{
        select:'selectUpdateSearch.do',
        table:'tableAjax.do?a=table',
        selectView:'selectView.do',
        all:'selectAll.do'
    },
    attachment:{
        uploadUrl:'upload_re.do',
        upload (file) {
            return new Promise((resolve, reject) => {
                var formdata = new FormData();
                formdata.append("fujian" , file , file.name || 'tmp.png');
                http.post(api.attachment.uploadUrl , formdata)
                    .then(res=>{
                        if(res.code == api.code.OK)
                        {
                            resolve(res.data);
                        }else{
                            reject(res.msg);
                        }
                    }).catch(err=>{
                        reject(err.message);
                    });
            });
        },
    },
        admins:{
                list:"admins_list.do",
                insert:"adminsinsert.do",
                update:"adminsupdate.do",
                delete:"admins_delete.do",
                detail:"admins_detail.do",
                create:"admins_add.do",
                edit:"admins_updt.do",
            },
        yonghu:{
                list:"yonghu_list.do",
                insert:"yonghuinsert.do",
                update:"yonghuupdate.do",
                delete:"yonghu_delete.do",
                detail:"yonghu_detail.do",
                create:"yonghu_add.do",
                edit:"yonghu_updt.do",
            },
        xinwenfenlei:{
                list:"xinwenfenlei_list.do",
                insert:"xinwenfenleiinsert.do",
                update:"xinwenfenleiupdate.do",
                delete:"xinwenfenlei_delete.do",
                detail:"xinwenfenlei_detail.do",
                create:"xinwenfenlei_add.do",
                edit:"xinwenfenlei_updt.do",
            },
        xinwenxinxi:{
                list:"xinwenxinxi_list.do",
                insert:"xinwenxinxiinsert.do",
                update:"xinwenxinxiupdate.do",
                delete:"xinwenxinxi_delete.do",
                detail:"xinwenxinxi_detail.do",
                create:"xinwenxinxi_add.do",
                edit:"xinwenxinxi_updt.do",
                listtianjiaren:"xinwenxinxi_list_tianjiaren.do",
                weblist:"xinwenxinxilist.do",
                webdetail:"xinwenxinxidetail.do",
            },
        youqinglianjie:{
                list:"youqinglianjie_list.do",
                insert:"youqinglianjieinsert.do",
                update:"youqinglianjieupdate.do",
                delete:"youqinglianjie_delete.do",
                detail:"youqinglianjie_detail.do",
                create:"youqinglianjie_add.do",
                edit:"youqinglianjie_updt.do",
            },
        liuyanban:{
                list:"liuyanban_list.do",
                insert:"liuyanbaninsert.do",
                update:"liuyanbanupdate.do",
                delete:"liuyanban_delete.do",
                detail:"liuyanban_detail.do",
                create:"liuyanban_add.do",
                edit:"liuyanban_updt.do",
                listliuyanren:"liuyanban_list_liuyanren.do",
            },
        lunbotu:{
                list:"lunbotu_list.do",
                insert:"lunbotuinsert.do",
                update:"lunbotuupdate.do",
                delete:"lunbotu_delete.do",
                detail:"lunbotu_detail.do",
                create:"lunbotu_add.do",
                edit:"lunbotu_updt.do",
            },
        shangpinfenlei:{
                list:"shangpinfenlei_list.do",
                insert:"shangpinfenleiinsert.do",
                update:"shangpinfenleiupdate.do",
                delete:"shangpinfenlei_delete.do",
                detail:"shangpinfenlei_detail.do",
                create:"shangpinfenlei_add.do",
                edit:"shangpinfenlei_updt.do",
            },
        shangpinxinxi:{
                list:"shangpinxinxi_list.do",
                insert:"shangpinxinxiinsert.do",
                update:"shangpinxinxiupdate.do",
                delete:"shangpinxinxi_delete.do",
                detail:"shangpinxinxi_detail.do",
                create:"shangpinxinxi_add.do",
                edit:"shangpinxinxi_updt.do",
                weblist:"shangpinxinxilist.do",
                webdetail:"shangpinxinxidetail.do",
            },
        gouwuche:{
                list:"gouwuche_list.do",
                insert:"gouwucheinsert.do",
                update:"gouwucheupdate.do",
                delete:"gouwuche_delete.do",
                detail:"gouwuche_detail.do",
                create:"gouwuche_add.do",
                edit:"gouwuche_updt.do",
                listgoumairen:"gouwuche_list_goumairen.do",
            },
        dingdanxinxi:{
                list:"dingdanxinxi_list.do",
                insert:"dingdanxinxiinsert.do",
                update:"dingdanxinxiupdate.do",
                delete:"dingdanxinxi_delete.do",
                detail:"dingdanxinxi_detail.do",
                create:"dingdanxinxi_add.do",
                edit:"dingdanxinxi_updt.do",
                listxiadanren:"dingdanxinxi_list_xiadanren.do",
            },
        peisongyuan:{
                list:"peisongyuan_list.do",
                insert:"peisongyuaninsert.do",
                update:"peisongyuanupdate.do",
                delete:"peisongyuan_delete.do",
                detail:"peisongyuan_detail.do",
                create:"peisongyuan_add.do",
                edit:"peisongyuan_updt.do",
            },
        dingdanqueren:{
                list:"dingdanqueren_list.do",
                insert:"dingdanquereninsert.do",
                update:"dingdanquerenupdate.do",
                delete:"dingdanqueren_delete.do",
                detail:"dingdanqueren_detail.do",
                create:"dingdanqueren_add.do",
                edit:"dingdanqueren_updt.do",
                listxiadanren:"dingdanqueren_list_xiadanren.do",
                listcaozuoren:"dingdanqueren_list_caozuoren.do",
            },
        tiwenjiance:{
                list:"tiwenjiance_list.do",
                insert:"tiwenjianceinsert.do",
                update:"tiwenjianceupdate.do",
                delete:"tiwenjiance_delete.do",
                detail:"tiwenjiance_detail.do",
                create:"tiwenjiance_add.do",
                edit:"tiwenjiance_updt.do",
                listgonghao:"tiwenjiance_list_gonghao.do",
                listjianceren:"tiwenjiance_list_jianceren.do",
            },
        dingdanpeisong:{
                list:"dingdanpeisong_list.do",
                insert:"dingdanpeisonginsert.do",
                update:"dingdanpeisongupdate.do",
                delete:"dingdanpeisong_delete.do",
                detail:"dingdanpeisong_detail.do",
                create:"dingdanpeisong_add.do",
                edit:"dingdanpeisong_updt.do",
                listxiadanren:"dingdanpeisong_list_xiadanren.do",
                listcaozuoren:"dingdanpeisong_list_caozuoren.do",
            },
        dingdanqianshou:{
                list:"dingdanqianshou_list.do",
                insert:"dingdanqianshouinsert.do",
                update:"dingdanqianshouupdate.do",
                delete:"dingdanqianshou_delete.do",
                detail:"dingdanqianshou_detail.do",
                create:"dingdanqianshou_add.do",
                edit:"dingdanqianshou_updt.do",
                listpingjiaren:"dingdanqianshou_list_pingjiaren.do",
            },
        dingdanquxiao:{
                list:"dingdanquxiao_list.do",
                insert:"dingdanquxiaoinsert.do",
                update:"dingdanquxiaoupdate.do",
                delete:"dingdanquxiao_delete.do",
                detail:"dingdanquxiao_detail.do",
                create:"dingdanquxiao_add.do",
                edit:"dingdanquxiao_updt.do",
                listquxiaoren:"dingdanquxiao_list_quxiaoren.do",
            },
    }

export default api
