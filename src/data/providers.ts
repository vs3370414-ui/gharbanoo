export type ServiceType = 'Plumber' | 'Electrician' | 'Carpenter' | 'Painter' | 'Contractor';

export interface Provider {
  id: string;
  name: string;
  service: ServiceType;
  phone: string;
  experience: number;
}

export const providers: Provider[] = [
  // Contractors
  { id: 'c1', name: 'Mohammad Auj', service: 'Contractor', phone: '8051919343', experience: 8 },
  { id: 'c2', name: 'Mithelsh Paswan', service: 'Contractor', phone: '7807978705', experience: 10 },
  { id: 'c3', name: 'Manoj Kumar', service: 'Contractor', phone: '9341846601', experience: 5 },
  
  // Plumbers
  { id: 'p1', name: 'Indresh', service: 'Plumber', phone: '7549636186', experience: 4 },
  { id: 'p2', name: 'Pawan', service: 'Plumber', phone: '6379529518', experience: 6 },
  { id: 'p3', name: 'Raman', service: 'Plumber', phone: '7070624413', experience: 3 },
  { id: 'p4', name: 'Sunil Kumar', service: 'Plumber', phone: '9973788826', experience: 7 },
  { id: 'p5', name: 'Narayan', service: 'Plumber', phone: '8406974423', experience: 5 },
  
  // Electricians
  { id: 'e1', name: 'Indresh', service: 'Electrician', phone: '7549636186', experience: 4 },
  { id: 'e2', name: 'Pawan', service: 'Electrician', phone: '6379519518', experience: 6 },
  { id: 'e3', name: 'Anil', service: 'Electrician', phone: '9334707538', experience: 8 },
  { id: 'e4', name: 'Laddu', service: 'Electrician', phone: '9572409993', experience: 3 },
  { id: 'e5', name: 'Ram Jani', service: 'Electrician', phone: '8051531917', experience: 5 },
  { id: 'e6', name: 'Ram', service: 'Electrician', phone: '7549224031', experience: 7 },
  { id: 'e7', name: 'Ranjeet', service: 'Electrician', phone: '9534389034', experience: 9 },
  
  // Carpenters
  { id: 'ca1', name: 'Kailash Sharma', service: 'Carpenter', phone: '8210945433', experience: 10 },
  { id: 'ca2', name: 'Amol Thakur', service: 'Carpenter', phone: '7739288336', experience: 6 },
  { id: 'ca3', name: 'Laxman', service: 'Carpenter', phone: '8877520552', experience: 4 },
  { id: 'ca4', name: 'Sadhu Thakur', service: 'Carpenter', phone: '9801972122', experience: 8 },
  
  // Painters
  { id: 'pa1', name: 'Bilash', service: 'Painter', phone: '9523060684', experience: 5 },
  { id: 'pa2', name: 'Chedi', service: 'Painter', phone: '7033459348', experience: 7 },
  { id: 'pa3', name: 'Promod', service: 'Painter', phone: '6204073494', experience: 4 },
  { id: 'pa4', name: 'Shambhu', service: 'Painter', phone: '7992343377', experience: 8 },
  { id: 'pa5', name: 'Sanjay', service: 'Painter', phone: '7542063510', experience: 6 },
  { id: 'pa6', name: 'Gulreja Khatun', service: 'Painter', phone: '7542063510', experience: 3 },
];
