import { Component, OnInit } from '@angular/core';
import {Inform}from '../mock';

@Component({
  selector: 'app-skills',
  template: `<h1>Умения</h1><h2>Навыки</h2><li *ngFor="let item of inform.skills" [ngStyle]="{'font-size':'16px'}">{{item}}</li><h2>Знания</h2><li *ngFor="let item of inform.knowledge" [ngStyle]="{'font-size':'16px'}">{{item}}</li><h2>Сертификаты</h2><li *ngFor="let item of inform.certificate" [ngStyle]="{'font-size':'16px'}">{{item}}</li>`,
  styles: ['.qw{font-size:16px}']
})

export class SkillsComponent implements OnInit {
inform=Inform;

  constructor() { }

  ngOnInit(): void {
  }

}


