import { Screen } from '../../common/notifications/toastify';
export const Validation={
     Valid:function(obj){
        const regex = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$');
        if(!regex.test(obj.Signup_Email || obj.Signup_Email=="")){
            Screen.Notification.Error("Please enter correct email");
            return false; 
        }
        if(obj.Signup_UserName.length<5 || obj.Signup_UserName==""){
            Screen.Notification.Error("User Name must have minimam 5 latter or cannot be blank");
            return  false;
        }
        if(obj.Signup_Password.length<8 || obj.Signup_UserName==""){
            Screen.Notification.Error("Password must have minimam 8 latter or cannot be blank");
            return  false;
        }
        return true;
    }   

}