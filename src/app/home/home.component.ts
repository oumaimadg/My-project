import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   possibiliteDeRestauration: any;
    restauration: string[] = ['Oui', 'Non'];
    possibiliteHebergement: any;
    hebergement: string[] = ['Oui', 'Non'];
    possibiliteIndemnisation: any;
    Indemnisation: string[] = ['Oui', 'Non'];
    allComplete: any;
    constructor(private builder:FormBuilder) {}
    isLinear = true;
    

    ngOnInit(): void {
        
    }

    Empregister = this.builder.group({
      basic:this.builder.group({
        firstname:this.builder.control('',Validators.required),
        lastname:this.builder.control('',Validators.required)

      }),
      contact:this.builder.group({
        email:this.builder.control('',Validators.required),
        phone:this.builder.control('',Validators.required),
        fax:this.builder.control('',Validators.required)

      }),
      address:this.builder.group({
        street:this.builder.control('',Validators.required),
        city:this.builder.control('',Validators.required),
        pin:this.builder.control('',Validators.required)
      })
    });

    get Basicform(){
      return this.Empregister.get("basic") as FormGroup;
    }
    get contactform(){
      return this.Empregister.get("contact") as FormGroup;
    }
    get addressform(){
      return this.Empregister.get("address") as FormGroup;
    }
    HandleSubmit(){
      if(this.Empregister.valid){
        console.log(this.Empregister.value);
      }
    }
}
