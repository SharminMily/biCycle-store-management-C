import React, { useState, useEffect } from 'react';

import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';



interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}


const Banner = () => {
  const [products] = useState<Product[]>([]);
  const responsiveOptions: CarouselResponsiveOption[] = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ];


  
 

  const productTemplate = (product: Product) => {
      return (
          <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
              <div className="mb-3">
                  <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
              </div>
              
             
          </div>
      );
  };
  
  return (
    <div>
       <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    </div>
  )
}

export default Banner