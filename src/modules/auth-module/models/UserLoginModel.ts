import ViewModel from "@/entities/models/ViewModel";
import { required, email } from "@vuelidate/validators";

export default class UserLoginModel extends ViewModel implements IUserLoginModel {
  email;
  password;
  remember;
  validators;

  constructor(data?: any) {
    super(data);
    this.initValidators();
  }

  init(data?: any) {
    if (data) {
      this.email = data.email;
      this.password = data.password;
      this.remember = data.remember;
    }
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data.email = this.email;
    data.password = this.password;
    data.remember = this.remember;
    return data;
  }

  initValidators() {
    this.validators = {
      email: { required, email },
      password: { required },
    };
  }
}

export interface IUserLoginModel {
  email?: string;
  password?: string;
  remember?: boolean;
}
