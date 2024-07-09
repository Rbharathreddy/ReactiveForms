import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  // get userName(){
  //   return this.registrationForm.get('userName')
  // }

  constructor (private fb:FormBuilder){}

    registrationForm =this.fb.group({
      userName :['',[Validators.required]],
      password :[''],
      confirmPassword :[''],
      address: this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']

      })

    })
  
//   registrationForm =new FormGroup({
//     userName :new FormControl('bharath'),
//     password :new FormControl(''),
//     confirmPassword :new FormControl(''),
//     address:new FormGroup({
//       city:new FormControl(''),
//       state:new FormControl(''),
//       postalCode:new FormControl('')
//     }

// )
//   });
   
  loadApiData(){
    this.registrationForm.setValue({
      userName :'bharath',
      password :'test',
      confirmPassword :'test',
      address:{
        city :'city',
        state:'STATE',
        postalCode:'12344'

    }

    });

  }


}
