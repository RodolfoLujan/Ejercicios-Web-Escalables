import { Component } from '@angular/core';
import { Product } from '../../interfaces/show.interface';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  imports: [NgClass, NgFor, NgIf, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, image: 'https://www.pngarts.com/files/4/Laptop-PNG-Image-Background.png' },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, image: 'https://www.pngplay.com/wp-content/uploads/12/Smartphone-PNG-Free-File-Download.png'  },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, image: 'https://www.pngplay.com/wp-content/uploads/8/Tablet-Transparent-PNG.png'  },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, image: 'https://w7.pngwing.com/pngs/585/746/png-transparent-gray-hp-flat-screen-monitor-computer-monitor-ips-panel-1080p-led-backlit-lcd-hdmi-monitor-television-electronics-computer.png'  },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image: 'https://w7.pngwing.com/pngs/233/602/png-transparent-computer-keyboard-laptop-republic-of-gamers-gaming-keypad-numeric-keypads-mechanical-electronics-computer-keyboard-laptop.png'  },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, image: 'https://w7.pngwing.com/pngs/614/234/png-transparent-computer-mouse-apple-wireless-mouse-computer-keyboard-logitech-optical-mouse-wireless-mouse.png'  },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, image: 'https://e7.pngegg.com/pngimages/710/453/png-clipart-hewlett-packard-hp-laserjet-pro-p1102-laser-printing-printer-hp-laserjet-ink-cartridge-electronic-device.png'  },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image: 'https://image.made-in-china.com/202f0j00NefUYMyIatqG/Good-Quality-with-Low-Price-Wired-Headphones-Folding-Stereo-Wired-Headset.webp'  },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, image: 'https://www.xtremepc.com.mx/cdn/shop/files/e0b613d4-8f72-4a8d-8f2e-684e7d22c285_800x.png?v=1734466174'  },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image: 'https://e7.pngegg.com/pngimages/71/445/png-clipart-r%C3%B8de-microphones-r%C3%98de-nt2-a-recording-studio-shock-mount-microphone-electronics-microphone.png'  },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, image: 'https://www.invidcomputers.com/images/0000000000414179155481000.png'  },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false, image: 'https://e7.pngegg.com/pngimages/422/668/png-clipart-web-camera-web-camera.png'  },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, image: 'https://w1.pngwing.com/pngs/1021/951/png-transparent-tplink-archer-c1200-router-tplink-archer-c5-tplink-archer-c7-tplink-archer-c59-tplink-archer-vr400-tplink-archer-c2300-wireless-router-wifi-thumbnail.png'  },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, image: 'https://es-store.msi.com/cdn/shop/files/tarjeta-grafica-msi-geforce-rtx-4060-ti-ventus-3x-16g_1024x.png?v=1729769576'  },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, image: 'https://file.aiquickdraw.com/imgcompressed/img/compressed_10bc64b044f7b628ae9c772d27355c0e.webp'  },
  ];

  selectedProduct: Product | null = null;
  selectProduct(product: Product): void{
    this.selectedProduct = this.selectedProduct === product ? null : product;
  }
}
