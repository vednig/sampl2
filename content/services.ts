import type { Service } from '../src/types/content'

export const services: Service[] = [
  {
    id:          's1',
    title:       'Residential Architecture',
    description: 'Private homes designed around the specific rhythms of how you live — not a typology, but a portrait.',
    icon:        '○',
    details: [
      'Site analysis and feasibility studies',
      'Concept design and spatial strategy',
      'Schematic design through construction documents',
      'Material specification and procurement guidance',
      'Construction administration and site oversight',
      'Interior architecture integration',
    ],
  },
  {
    id:          's2',
    title:       'Commercial & Workplace',
    description: 'Offices, retail, and mixed-use environments where spatial quality supports the performance and culture of your organization.',
    icon:        '□',
    details: [
      'Workplace strategy and programming',
      'Brand environment design',
      'Multi-tenant building design',
      'Base building and tenant fit-out',
      'Hospitality and retail design',
      'LEED and sustainability certification support',
    ],
  },
  {
    id:          's3',
    title:       'Cultural & Civic',
    description: 'Museums, galleries, pavilions, and public spaces designed with the civic weight their programs require.',
    icon:        '△',
    details: [
      'Cultural building programming',
      'Masterplan and site design',
      'Adaptive reuse of heritage structures',
      'Exhibition design integration',
      'Public realm and landscape coordination',
      'Stakeholder engagement facilitation',
    ],
  },
  {
    id:          's4',
    title:       'Interior Architecture',
    description: 'The interior as architecture — not decoration applied to a shell, but space designed from the inside out.',
    icon:        '◇',
    details: [
      'Interior spatial planning',
      'Bespoke furniture and fixture design',
      'Material and finish selection',
      'Lighting concept and coordination',
      'Art curation consultation',
      'FF&E specification and procurement',
    ],
  },
  {
    id:          's5',
    title:       'Design Consultancy',
    description: 'Expert guidance at any stage of a project — from early feasibility to design review on projects led by others.',
    icon:        '⬡',
    details: [
      'Design review and critique',
      'Planning and zoning consultation',
      'Peer review for complex projects',
      'Design excellence advisory panels',
      'Competition jury participation',
      'Academic and research collaborations',
    ],
  },
]
