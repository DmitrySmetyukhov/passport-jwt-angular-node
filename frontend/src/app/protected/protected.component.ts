import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {
  public message = '';
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any>('/api/protected').subscribe(
      response => this.message= response.message,
      error => {
        console.log(error);
        this.message = error.message;
      }
    )
  }
}
