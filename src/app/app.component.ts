import { Component } from '@angular/core';
import { DataService } from './data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ccm-app';
  constructor(private dataService: DataService) {}
  isUploadhidden=true
  popUp(){
    this.isUploadhidden=!this.isUploadhidden
  }
  uploadedDocuments: any[] = [];

  openFileInput(): void {
    // Trigger the file input programmatically
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Handle the selected file here (e.g., upload or process it)
      console.log(`Selected file: ${selectedFile.name}`);
      
      // Add the uploaded document to the array
      this.uploadedDocuments.push({ id: this.uploadedDocuments.length, filename: selectedFile.name });
    }
  }
  }
 

