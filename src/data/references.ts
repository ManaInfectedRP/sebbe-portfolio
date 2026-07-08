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
  {
    id: 'antonio-prgomet',
    name: 'Antonio Prgomet',
    role: 'Teacher',
    company: 'NBI/Handelsakademin',
    email: 'antonio.ek@hotmail.se',
    phone: '',
    relation: 'Teacher and mentor during software development with ai studies at NBI/Handelsakademin',
  },
  {
    id: 'robert-ploski',
    name: 'Robert Ploski',
    role: 'Thesis together & Class Mate',
    company: 'NBI/Handelsakademin',
    email: 'robert.ploski90@gmail.com',
    phone: '',
    relation: 'Student colleague during software development with ai at NBI/Handelsakademin',
  },
  {
    id: 'kristoffer-larsson',
    name: 'Kristoffer Larsson',
    role: 'Big Brother',
    company: 'N/A',
    email: '',
    phone: '',
    relation: 'Older brother who can vouch for my character and work ethic',
  },
];
