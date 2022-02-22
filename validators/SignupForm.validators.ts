import { AbstractControl } from "@angular/forms";

export class SignupForm{
    static checkB(control:AbstractControl){
        if(!(control.value as string).includes('b')){
            return { checkB : true}
        }else{
            return null
        }
    }
}