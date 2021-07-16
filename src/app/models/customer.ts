export class Customer {
    CustomerId?: number;
    CustomerName!: string;
    CustomerImage!: string;
    CustomerPhone!: string;
    CustomerAddress!: string;

    constructor(CustomerName: string, CustomerImage: string, CustomerPhone: string, CustomerId?: number) {
        this.CustomerId = CustomerId;
        this.CustomerName = CustomerName;
        this.CustomerImage = CustomerImage;
        this.CustomerPhone = CustomerPhone;
        this.CustomerAddress = this.CustomerAddress;
    }
}