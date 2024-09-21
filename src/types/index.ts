export interface Product {
  id: string;
  name: string;
  category: string;
}

export interface Vulnerability {
  id: string;
  title: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
}
