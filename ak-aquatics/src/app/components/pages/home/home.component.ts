import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Bamboo Watch',
      image: 'bamboo-watch.jpg',
      price: 65,
      inventoryStatus: 'In Stock'
    },
    {
      id: 2,
      name: 'Black Watch',
      image: 'black-watch.jpg',
      price: 72,
      inventoryStatus: 'Low Stock'
    },
    {
      id: 3,
      name: 'Blue Band',
      image: 'blue-band.jpg',
      price: 79,
      inventoryStatus: 'Out of Stock'
    },
    {
      id: 4,
      name: 'Blue T-Shirt',
      image: 'blue-t-shirt.jpg',
      price: 29,
      inventoryStatus: 'In Stock'
    },
    {
      id: 5,
      name: 'Brown Purse',
      image: 'brown-purse.jpg',
      price: 120,
      inventoryStatus: 'In Stock'
    },
    {
      id: 6,
      name: 'Chakra Bracelet',
      image: 'chakra-bracelet.jpg',
      price: 15,
      inventoryStatus: 'Low Stock'
    },
    {
      id: 7,
      name: 'Galaxy Earrings',
      image: 'galaxy-earrings.jpg',
      price: 45,
      inventoryStatus: 'In Stock'
    },
    {
      id: 8,
      name: 'Gaming Set',
      image: 'gaming-set.jpg',
      price: 99,
      inventoryStatus: 'Out of Stock'
    },
    {
      id: 9,
      name: 'Green T-Shirt',
      image: 'green-t-shirt.jpg',
      price: 35,
      inventoryStatus: 'Low Stock'
    },
    {
      id: 10,
      name: 'Yellow Sneakers',
      image: 'yellow-sneakers.jpg',
      price: 85,
      inventoryStatus: 'In Stock'
    }
  ];
  

  responsiveOptions: any[] | undefined;

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//       this.productService.getProductsSmall().then((products) => {
//           this.products = products;
//       });

//       this.responsiveOptions = [
//           {
//               breakpoint: '1199px',
//               numVisible: 1,
//               numScroll: 1
//           },
//           {
//               breakpoint: '991px',
//               numVisible: 2,
//               numScroll: 1
//           },
//           {
//               breakpoint: '767px',
//               numVisible: 1,
//               numScroll: 1
//           }
//       ];
//   }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default :
              return '';
      }
  }
}
