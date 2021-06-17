import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-delete-material',
  templateUrl: './delete-material.component.html',
  styleUrls: ['./delete-material.component.css']
})
export class DeleteMaterialComponent implements OnInit {

  data: Array<any> = [];
  selected: String = "";
  variable: String = ""

  constructor() { 
    this.data= [] ;
    this.selected = "";
    this.variable = "";
  }

  ngOnInit(): void {
    axios.get('http://localhost:2000/material')
        .then(response =>{
            this.data = response.data;
            this.selected=this.data[0]._id;
    
        })
        .catch(error=> {console.log(error)});
  }

    deleteMaterial(): void{
      

      axios.delete('http://localhost:2000/material/'+ this.selected)
        .then(response=>{console.log(response.data)});
      
      this.variable = "Material deleted Successfully";

      axios.get('http://localhost:2000/material')
        .then(response =>{
            this.data = response.data;
            this.selected=this.data[0]._id;
    
        })
        .catch(error=> {console.log(error)});
    }

    reset(): void {
      this.selected = this.data[0]._id;
      this.variable = "";
    }

  


}
