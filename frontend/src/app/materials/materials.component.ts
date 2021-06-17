import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import FileDownload from 'js-file-download'

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

  downloadFile(id: string, name: string): void{

    axios({
      url: 'http://localhost:2000/material/download/'+ id,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
       const url = window.URL.createObjectURL(new Blob([response.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', name); //or any other extension
       document.body.appendChild(link);
       link.click();
    });
  }

}
