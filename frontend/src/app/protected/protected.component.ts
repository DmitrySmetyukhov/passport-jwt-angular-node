import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any>('/api/test').subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }
}
