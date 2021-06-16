import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.css']
})
export class AddMaterialsComponent implements OnInit {

  fileName: string = '';
  data: FormData;
  Details: string = '';

  constructor() {
    this.data = new FormData();
    this.Details = "";
  }
  

  ngOnInit(): void {
    
  }

  fileUpload(event: any) {
    const file = event.target.files[0]
    this.data.append('file', file);
    this.fileName = file.name
  }

  handleSubmit(event: Event) {
    event.preventDefault()
    console.log(this.data);

    axios.post('http://localhost:2000/material/add', this.data)
        .then(res => {
          console.log(res.data)
          if(res.data == "Material added"){
              this.Details = "Material Added Succesfully";
          }
          else{
            this.Details = "File didnot Uploaded"
          }
        });

  }
  
}
