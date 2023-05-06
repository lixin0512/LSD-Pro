// message二次封装
import { ElMessage } from 'element-plus'

export default class Msg {
    show(_msg,type='info',callback){
        if(!_msg){
            return;
        }
        ElMessage({
            message:_msg,
            type: type,
            duration: 3000,
            dangerouslyUseHTMLString: true,
            onClose: callback,
        })
    }
 
    info(msg,callback){
        this.show(msg,'info',callback)
    }
 
    success(msg,callback){
        this.show(msg,'success',callback)
    }
 
    warning(msg,callback){
        this.show(msg,'warning',callback)
    }
 
    error(msg,callback){
        this.show(msg,'error',callback)
    }
 
}
