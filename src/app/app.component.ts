import { Component, OnInit } from '@angular/core';
import { CovidService } from './Service/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChartApp';
  
  columnsName = ["Tarih","İstanbul","Ankara","İzmir","Konya","Antalya"];
  options:any={legend:{position:'Bottom'}};

  constructor(public covidService:CovidService){
       
  }
  ngOnInit(): void {
    this.covidService.startConnection();
    this.covidService.startListener(); 

  }

 

}

