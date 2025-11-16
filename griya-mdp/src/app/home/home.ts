import { Component } from '@angular/core';
import { LokasiPerumahanComponent } from '../lokasi-perumahan/lokasi-perumahan';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LokasiPerumahanComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}
