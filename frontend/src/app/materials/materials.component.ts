import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})

export class MaterialsComponent implements OnInit {
  
  data: Array<any> = [];

  constructor() { 
    this.data= [] ;
    
  }

  ngOnInit(): void {
    axios.get('http://localhost:2000/material')
        .then(response =>{
            let a = response.data;
            this.data=a;
            console.log(this.data)
        })
        .catch(error=> {console.log(error)});
  }

}
