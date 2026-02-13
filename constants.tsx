
import { Service, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: 'SewerLine Tunneling Pros',
  phone: '(844) 340-6413',
  address: '2000 Hwy 6, Sugar Land, Texas, 77478',
  email: 'service@sewerlinetunneling.com'
};

export const SERVICES: Service[] = [
  {
    id: 'tunneling',
    title: 'Sewer Line Tunneling',
    description: 'Advanced trenchless solutions to reach underground leaks without damaging your home\'s interior flooring or foundation.',
    icon: 'fa-tools'
  },
  {
    id: 'secondary',
    title: 'Secondary Under Slab Tunnel',
    description: 'Precise secondary access points for complex pipe replacement and multi-junction foundation leaks in hard-to-reach areas.',
    icon: 'fa-underline'
  },
  {
    id: 'pier',
    title: 'Foundation Pier Plumbing',
    description: 'Integrated plumbing solutions designed to work seamlessly with foundation repair and pier installation teams.',
    icon: 'fa-building'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Will tunneling damage my foundation?',
    answer: 'No. When performed by professionals, tunneling preserves the structural integrity of your slab. We utilize proper backfilling and soil compaction techniques to ensure your home remains stable.'
  },
  {
    question: 'How long does the process take?',
    answer: 'Most standard sewer line tunnels (10-15 feet) take 2 to 3 days to complete, depending on soil density and the complexity of the plumbing repair.'
  },
  {
    question: 'Is tunneling more expensive than jackhammering?',
    answer: 'Upfront labor costs for tunneling are higher; however, when you factor in the cost of replacing hardwood, tile, or carpet, tunneling is often the more economical choice.'
  },
  {
    question: 'Do you serve all of Sugar Land?',
    answer: 'Yes, we are located in the heart of Sugar Land and provide expert tunneling services to the entire Greater Houston area.'
  }
];

export const SYSTEM_INSTRUCTION = `You are a professional Sewer Line Tunneling Consultant for "SewerLine Tunneling Pros" in Sugar Land, Texas. 
Your goal is to help homeowners understand the benefits of under-slab tunneling versus traditional slab breakouts (jackhammering).

Key selling points to emphasize:
- Zero Interior Mess: No dust, debris, or ruined flooring.
- Stay in Your Home: Residents don't have to relocate during repairs.
- Structural Integrity: Avoids the "Swiss cheese" effect on concrete foundations.
- Cost-Effective: Saves money on flooring replacement and alternative lodging.

Tone: Professional, empathetic, informative, and expert.
If asked about costs, explain that while labor for tunneling is higher, total restoration costs are lower. 
Address: ${BUSINESS_INFO.address}. Phone: ${BUSINESS_INFO.phone}.`;
