import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferClimateService implements OnInit {
  key: string = '9c8914ab21a5d457df7e7e50cf8ea7e7';
  cityName: string = 'curitiba';

  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  // constructor(private http: HttpClient) {}
  http: any;
  ngOnInit(): void {
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.key}`
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  changeData(data: any) {
    this.dataSource.next(data);
  }
}
