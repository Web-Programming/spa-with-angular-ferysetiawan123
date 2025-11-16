import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Housing {
  id: number;
  name: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  rating: number;
  status: string;
  description: string;
  postedDays: number;
  type: string;
}

@Component({
  selector: 'app-lokasi-perumahan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lokasi-perumahan.html',
  styleUrls: ['./lokasi-perumahan.css']
})
export class LokasiPerumahanComponent {

  filterSelected = 'Semua';

  housingList: Housing[] = [
    {
      id: 1,
      name: 'Lakeview Harmony Residence',
      location: 'Bandung, Indonesia',
      price: 720000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 110,
      image: 'https://i.imgur.com/6V6YqUR.jpeg',
      rating: 4.7,
      status: 'Available',
      description: 'Hunian premium dengan pemandangan danau dan udara sejuk khas Bandung.',
      postedDays: 2,
      type: 'Rumah'
    },
    {
      id: 2,
      name: 'Sunrise Garden Estate',
      location: 'Semarang, Indonesia',
      price: 540000000,
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      image: 'https://i.imgur.com/AMoZz3L.jpeg',
      rating: 4.5,
      status: 'Available',
      description: 'Perumahan modern dengan taman hijau dan fasilitas keluarga lengkap.',
      postedDays: 5,
      type: 'Rumah'
    },
    {
      id: 3,
      name: 'Hillside Modern Villa',
      location: 'Batu, Malang, Indonesia',
      price: 890000000,
      bedrooms: 4,
      bathrooms: 3,
      area: 150,
      image: 'https://i.imgur.com/lKnZ0dC.jpeg',
      rating: 4.9,
      status: 'Premium',
      description: 'Villa modern dengan udara dingin dan pemandangan pegunungan.',
      postedDays: 1,
      type: 'Rumah'
    },
    {
      id: 4,
      name: 'Riverview Grand Residence',
      location: 'Makassar, Indonesia',
      price: 630000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 115,
      image: 'https://i.imgur.com/xtJdZE8.jpeg',
      rating: 4.6,
      status: 'Available',
      description: 'Hunian dekat sungai dengan akses cepat ke pusat kota.',
      postedDays: 3,
      type: 'Rumah'
    },
    {
      id: 5,
      name: 'Tropical Breeze Housing',
      location: 'Bali, Indonesia',
      price: 1100000000,
      bedrooms: 3,
      bathrooms: 3,
      area: 140,
      image: 'https://i.imgur.com/kKhdZQP.jpeg',
      rating: 4.9,
      status: 'Booking',
      description: 'Hunian tropis bernuansa resort with vibes Bali.',
      postedDays: 6,
      type: 'Rumah'
    },
    {
      id: 6,
      name: 'Citylight Modern Apartment',
      location: 'Surabaya, Indonesia',
      price: 480000000,
      bedrooms: 2,
      bathrooms: 1,
      area: 70,
      image: 'https://i.imgur.com/j6cY4tF.jpeg',
      rating: 4.4,
      status: 'Available',
      description: 'Apartemen modern dengan view kota.',
      postedDays: 4,
      type: 'Apartemen'
    }
  ];

  get filteredList() {
    if (this.filterSelected === 'Semua') return this.housingList;
    return this.housingList.filter(x => x.type === this.filterSelected);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  }
}
