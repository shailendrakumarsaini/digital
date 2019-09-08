import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService{
    base_url : string;
    constructor(){
        // this.base_url = "https://reqres.in/";
        this.base_url = "http://localhost:3000/";
    }

    getBaseUrl(){
        return this.base_url;
    }

    
}