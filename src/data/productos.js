const products = [
  {
    id: 1,
    title: "VIDEO GEFORCE GT 210 1GB ARKTEK DDR3 LP",
    stock: 5,
    price: 6227,
    oldprice: 9880,
    image: "/images/gforcegt210.jpg",
    imageb: "/images/gforcegt210b.jpg",
    imagec: "/images/gforcegt210c.jpg",
    description:
      "ArkTek Placa Grafica GT210 1Gb VGA HDMI DVI LP Marca Arktek, Modelo GT-210, GPU NVIDIA Geforce G210, Memoria de Video 1GB DDR3, Barramento de memória 64 bits, Reloj de motor 600MHz, PCI Express 2, Salidas de video 1 x HDMI 1 x DVI 1 x VGA, Soporte HDCP Si, Resolucion D-sub de 2048 x 1536 Resolucion DVI de 2560 x 1600, fuente recomendada 300W, Consumo de energia 30.5W, Temperatura máxima 105 C, Soporte Windows 10/8/7. ",
    categoryId: "placas-de-video",
  },
  {
    id: 2,
    title: "VIDEO GEFORCE GT 730 2GB GIGABYTE DDR3",
    stock: 7,
    price: 8800,
    oldprice: 11880,
    image: "/images/gforcegt730.jpg",
    imageb: "/images/gforcegt730b.jpg",
    imagec: "/images/gforcegt730c.jpg",
    description:
      "Powered by NVIDIA GeForce GT 730 GPU, Integrated with 2GB GDDR3 64bit memory interface, Core clock 902MHz, Features Dual-link,DVI-I / HDMI, Support PCI Express 2.0 x8 bus interface, Alimentación mínimo soportada: 300 W, Especificaciones Gigabyte GeForce GT 730 2GB GDDR3: Procesador,  Procesador gráfico: GeForce GT 730, Máxima resolución: 4096 x 2160 Pixeles, Frecuencia del procesador: 902 MHz, Gráficos discretos memoria del adaptador: 2 GB, Tipo de memoria de adaptador gráfico: GDDR3, Ancho de datos: 64 bit ,Velocidad de memoria del reloj: 5000 MHz,Tipo de interfaz: PCI Express x8 2.0, Número de puertos HDMI: 1, Cantidad de puertos DVI-I: 1, Sistema mínimo: 300 W, Tipo de enfriamiento: Activo , PhysX: Si,Alta Definición Total: Si, NVIDIA 3D Vision: Si",
    categoryId: "placas-de-video",
  },
  {
    id: 3,
    title: "MICRO INTEL CELERON G5905 DC 3.5GHZ ",
    stock: 4,
    price: 7238,
    oldprice: 12900,
    image: "/images/intelg5905.jpg",
    imageb: "/images/intelg5905b.jpg",
    imagec: "/images/intelg5905c.jpg",
    description:
      "Especificaciones de la CPU, Cantidad de núcleos 2, Cantidad de subprocesos 2, Frecuencia básica del procesador 3,50 GHz, Caché 4 MB Intel® Smart Cache, Velocidad del bus 8 GT/s, TDP 58 W, Gráficos del procesador  Gráficos UHD Intel® 610, Frecuencia de base de gráficos 350 MHz, Frecuencia dinámica máxima de gráficos 1.05 GHz, Memoria máxima de video de gráficos 64 GB",
    categoryId: "procesadores",
  },
  {
    id: 4,
    title: "VIDEO RADEON RX 550 4GB PWRD DRAGON",
    stock: 3,
    price: 32591,
    oldprice: 36880,
    image: "/images/radeonrx550.jpg",
    imageb: "/images/radeonrx550b.jpg",
    imagec: "/images/radeonrx550c.jpg",
    description:
      "Graphics Engine AXRX 550 4GBD5-HLE, Video Memory 4GB GDDR5, Stream Processor 512 Units, Engine Clock(OC) up to 1071MHz with boost, Engine Clock(STD/Silent), Memory Clock 1500MHz x4 (6.0 Gbps), Memory Interface 128-bit, DirectX® Support 12, Bus Standard PCIE 3.0, Standard Display Connectors SL DVI-D/ HDMI, Customized Specifications, Product Remark, Feature Support, OpenGL Support, CrossFireX™ Technology, AMD Stream Technology, DVI 2560x1600, DisplayPort 4096x2160, HDMI 4096x2160, Power Specs + Board Dimensions, Board Dimensions 181*120*20mm, Minimum System Power requirement (W) 250W",
    categoryId: "placas-de-video",
  },
  {
    id: 5,
    title: "HD SSD 256GB M2 ADATA XPG SPECTRIX S40G NVME",
    stock: 2,
    price: 9980,
    oldprice: 11900,
    image: "/images/sdadata.jpg",
    imageb: "/images/sdadatab.jpg",
    imagec: "/images/sdadatac.jpg",
    description:
      "Capacidad: 256GB, Interfaz PCIe NVMe 1.3, Lectura/escritura de hasta 3500/3000 MB/s, Factor de forma M.2 2280, tamaño delgado para adaptarse a PC de sobremesa y computadora portátil, Diseño de una sola cara para adaptarse a ultrabooks, Motor RAID para una mayor integridad de los datos, Flash NAND: 3D NAND",
    categoryId: "discos-ssd",
  },
  {
    id: 6,
    title: "VIDEO GEFORCE GTX 1660 TI 6GB ROCKET OC",
    stock: 5,
    price: 74390,
    oldprice: 96000,
    image: "/images/gforcegtx1660.jpg",
    imageb: "/images/gforcegtx1660b.jpg",
    imagec: "/images/gforcegtx1660c.jpg",
    description:
      "Marca Gigabyte, Series GV-N1660OC-6GD, Número de modelo del producto GV-N1660OC-6GD, Peso del producto 1.8 pounds, Dimensiones del producto 8.8 x 4.8 x 1.6 pulgadas, Dimensiones del artículo Largo x Ancho x Altura 8.82 x 4.76 x 1.57 pulgadas, Tamaño de memoria flash 6 GB, RAM 6 GB, Velocidad de memoria 8002 MHz, Coprocesador de gráficos GeForce GTX1660, Marca Chipset nav, Tamaño de RAM de la tarjeta gráfica 6 GB",
    categoryId: "placas-de-video",
  },
  {
    id: 7,
    title: "VIDEO RADEON RX 7000 XT 4GB  GAMING OC",
    stock: 2,
    price: 52990,
    oldprice: 58890,
    image: "/images/radeonrx7000.jpg",
    imageb: "/images/radeonrx7000b.jpg",
    imagec: "/images/radeonrx7000c.jpg",
    description:
      "Graphics Processing Radeon™ RX 6500 XT, Stream Processors 1024, Process Technology 6 nm, Memory Clock 18000 MHz, Memory Size 4GB, Memory Type GDDR6, Memory Bus 64 bit, Memory Bandwidth (GB/sec) 144 GB/s, Card Bus PCI-E 4.0, Digital max resolution 7680x4320, Multi-view 2, Card size L=282 W=114 H=40 mm, PCB Form ATX    , DirectX 12 Ultimate, OpenGL 4.6, Recommended PSU 400W, Power Connectors 6 pin, Output DisplayPort 1.4a *1 / HDMI 2.1 *1",
    categoryId: "placas-de-video",
  },
  {
    id: 8,
    title: "HD SSD 120GB GIGABYTE",
    stock: 3,
    price: 3360,
    oldprice: 6900,
    image: "/images/sdgigabyte.jpg",
    imageb: "/images/sdgigabyteb.jpg",
    imagec: "/images/sdgigabytec.jpg",
    description:
      "Factor de forma: SSD interno de 2,5 pulgadas., Interfaz: SATA 6.0Gb / s, Capacidad total: 120GB, Garantía: Limitada de 3 años, Velocidad de lectura secuencial: hasta 500 MB / s, Velocidad de escritura secuencial: hasta 380 MB / s., IOPS de lectura aleatoria (Hasta): 50K, Escritura aleatoria IOPS (Hasta): 60K, Compatibilidad con TRIM & SMART",
    categoryId: "discos-ssd",
  },
  {
    id: 9,
    title: "VIDEO GEFORCE GT 1030 MSI 2GB LOCK DDR4",
    stock: 4,
    price: 22060,
    oldprice: 25880,
    image: "/images/gforcegt1030.jpg",
    imageb: "/images/gforcegt1030b.jpg",
    imagec: "/images/gforcegt1030c.jpg",
    description:
      "NOMBRE DEL MODELO GeForce ® GT 1030 2GD4 LP OC, UNIDAD DE PROCESAMIENTO GRÁFICO NVIDIA ® GeForce ® GT 1030, INTERFAZ PCI Express 3.0 x16 (utiliza x4), NOMBRE PRINCIPAL GP 108-310, NÚCLEOS 384 unidades, RELOJES CENTRALES 1189 MHz / 1430 MHz, VELOCIDAD DEL RELOJ DE MEMORIA 2100 MHz,MEMORIA 2GB DDR4, BUS DE MEMORIA 64 bits, SALIDA DisplayPort / HDMI, SOPORTE HDCP 2.2, EL CONSUMO DE ENERGÍA 20 W, FUENTE DE ALIMENTACIÓN RECOMENDADA 300 W, PESO (TARJETA / PAQUETE) 131 g / 371 g",
    categoryId: "placas-de-video",
  },
  {
    id: 10,
    title: "MICRO INTEL CELERON G5925 S1200",
    stock: 5,
    price: 7890,
    oldprice: 14900,
    image: "/images/intelg5925.jpg",
    imageb: "/images/intelg5925b.jpg",
    imagec: "/images/intelg5925c.jpg",
    description:
      "Tipos de memoria RAM soportadas: DDR4, Zócalos compatibles: 1200, Arquitectura: x86-64, Aplicación: Computadoras de escritorio, Procesador gráfico: Intel HD Graphics 610, Cantidad de núcleos de CPU: 2, Tamaño máximo de memoria RAM soportada: 128 GB",
    categoryId: "procesadores",
  },
  {
    id: 11,
    title: "MICRO AMD RYZEN 3 4100 S/VIDEO BULK",
    stock: 2,
    price: 16577,
    oldprice: 24900,
    image: "/images/ryzen.jpg",
    imageb: "/images/ryzenb.jpg",
    imagec: "/images/ryzenc.jpg",
    description:
      "Familia de productos AMD Ryzen™ Processors, Línea de productos AMD Ryzen™ 3 Desktop Processors, # de núcleos de CPU 4, # de hilos 8, Reloj de aumento máx. Hasta 4.0GHz, Reloj base 3.8GHz, Caché L1 total 256KB, Caché L2 total 2MB, Caché L3 total 4MB, TDP/TDP predeterminado 65W, Processor Technology for CPU Cores TSMC 7nm FinFET, Desbloqueados Sí, CPU Socket AM4, Número de sockets 1P, Solución térmica (PIB) AMD Wraith Stealth, Temp. máx. 95°C",
    categoryId: "procesadores",
  },
  {
    id: 12,
    title: "HD SSD 120GB MARKVISION SATA III 2.5 BULK",
    stock: 4,
    price: 2830,
    oldprice: 5900,
    image: "/images/sdsata.jpg",
    imageb: "/images/sdsatab.jpg",
    imagec: "/images/sdsatac.jpg",
    description:
      "DISCO SSD MARKVISION BULK DE FABRICA SIN BLISTER, VELOCIDAD DE LECTURA SECUENCIAL HASTA 560MBPS, VELOCIDAD DE ESCRITURA SECUENCIAL HASTA 530MBPS, FORMATO 2.5 100X69X9mm, CONEXION SATA 3, CAPACIDAD 120GB SSD, MODELO MVSD120G25-A1 2031EW/2045EW",
    categoryId: "discos-ssd",
  },
  {
    id: 13,
    title: "VIDEO RADEON RX 580 8GB  RED DEVIL BULK ",
    stock: 8,
    price: 89990,
    oldprice: 105500,
    image: "/images/radeonrx580.jpg",
    imageb: "/images/radeonrx580b.jpg",
    imagec: "/images/radeonrx580c.jpg",
    description:
      "SPECIFICATION: Graphics Engine AXRX 580 8GBD5-3DH/OC, Video Memory 8GB GDDR5, Stream Processor 2304 Units, Engine Clock(OC) up to 1380MHz with boost, Engine Clock(STD/Silent), Memory Clock 2000MHz x4 (8.0Gbps), Memory Interface 256-bit, DirectX® Support 12, Bus Standard PCIE 3.0, Standard Display Connectors DL DVI-D/ HDMI/ DisplayPort x3",
    categoryId: "placas-de-video",
  },
  {
    id: 14,
    title: "VIDEO RADEON RX 6500 XT 4GB ASUS DX O4G",
    stock: 6,
    price: 60058,
    oldprice: 65990,
    image: "/images/radeonrx6500.jpg",
    imageb: "/images/radeonrx6500b.jpg",
    imagec: "/images/radeonrx6500c.jpg",
    description:
      "Model Name Radeon™ RX 6500 XT MECH 2X 4G OC, Graphics Processing Unit Radeon™ RX 6500 XT, Interface PCI Express 4.0 x4, Cores 1024 Units, Core Clocks Boost: Up to 2825 MHz / Game: Up to 2685 MHz, Memory Speed 18 Gbps, Memory 4GB GDDR6, Memory Bus 64-bit, Output DisplayPort x 1 (v1.4a) / HDMI x 1 (Supports 4K@120Hz/8K@60Hz and VRR as specified in HDMI 2.1), HDCP Support Yes, Power consumption 107W, Power connectors 6-pin x 1, Recommended PSU 400W, Card Dimension (mm) 172 x 112 x 42 mm, Weight (Card / Package) 452g / 806g, DirectX Version Support 12 API, OpenGL Version Support 4.6, Multi-GPU Technology Yes, Afterburner OC Yes, Maximum Displays 2, VR Ready Yes, Digital Maximum Resolution 7680 x 4320",
    categoryId: "placas-de-video",
  },
];

export const dataBase = new Promise((resolve, reject) => {
  let promise = true;

  setTimeout(() => {
    if (promise) {
      resolve(products);
    } else {
      reject("Request failed");
    }
  }, 2000);
});
