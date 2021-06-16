import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-delete-material',
  templateUrl: './delete-material.component.html',
  styleUrls: ['./delete-material.component.css']
})
export class DeleteMaterialComponent implements OnInit {

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
