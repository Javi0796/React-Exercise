export class Contact{
    name = "";
    lastName = "";
    email = "";
    isOn = false;

    constructor(name, lastName, email, isOn ){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.isOn = isOn;
    }
}