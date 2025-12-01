import { Component, OnInit } from '@angular/core';
import { SQLiteService } from './services/sqlite.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private sqlite: SQLiteService) {}

  async ngOnInit() {
    await this.sqlite.initDB();
  }
}
