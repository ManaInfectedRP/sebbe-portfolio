export interface Reference {
  id: string;
  name: string;
  role: string;
  company: string;
  email?: string;
  phone?: string;
  relation: string;
}

export const references: Reference[] = [
  {
    id: 'marcus-granberg',
    name: 'Marcus Granberg',
    role: 'Manager',
    company: 'Podmanager.AI',
    email: 'marcus.granberg@podmanager.ai',
    phone: '076-100 04 71',
    relation: 'Supervisor during LIA internship at Podmanager.AI',
  },
];
