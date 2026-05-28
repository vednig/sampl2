import type { StudioData } from '../src/types/content'

export const studioData: StudioData = {
  architectName: 'Elena Marchetti',
  role:          'Founder & Principal Architect',
  bio: [
    'Elena Marchetti founded FORMA in 2008 after a decade working with Tadao Ando in Osaka and Herzog & de Meuron in Basel. Her practice is defined by an obsessive attention to material truth — the idea that a building\'s honesty is felt before it is seen.',
    'Born in Trieste and educated at the Politecnico di Milano and the ETH Zürich, Elena brings a distinctly European sensibility to her New York-based practice. From intimate residences to civic cultural buildings, the underlying language remains consistent.',
    'FORMA\'s projects have been recognized with the AIA National Award, the World Architecture Festival\'s Residential Award, and the Dezeen Award for Architecture. The studio currently operates with a team of twelve, taking on a deliberate number of projects annually.',
  ],
  philosophy: {
    headline: 'Architecture is an act of profound responsibility.',
    body: [
      'We believe buildings are not objects but relationships — between people and place, between now and memory, between the constructed and the natural. Every commission is an invitation to make something that outlasts the moment of its making.',
      'Our process begins with listening: to the site, to the client, to the program. We do not impose an aesthetic. We excavate the latent potential of each situation and give it form.',
      'We work slowly and intentionally. We take on fewer projects to give more to each. The difference between good and extraordinary architecture is always the accumulation of decisions most people never consciously notice.',
    ],
  },
  team: [
    { name: 'Elena Marchetti', role: 'Founder & Principal Architect', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800' },
    { name: 'James Okafor',    role: 'Senior Associate',              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800' },
    { name: 'Yuki Tanaka',     role: 'Project Architect',             image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800' },
    { name: 'Marcus Heide',    role: 'Design Lead',                   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800' },
  ],
  timeline: [
    { year: 2008, title: 'FORMA Founded',         description: 'Studio established in Lower Manhattan with a focus on residential architecture and material-driven design.' },
    { year: 2011, title: 'First AIA Award',        description: 'The Holloway Residence in Connecticut received the AIA New York Chapter Award for Architecture.' },
    { year: 2014, title: 'International Expansion', description: 'First European commission: a private residence in the Luberon, France. Beginning of ongoing international practice.' },
    { year: 2017, title: 'Cultural Work Begins',   description: 'Commissioned to design the Westport Arts Pavilion, marking FORMA\'s entry into civic and cultural architecture.' },
    { year: 2019, title: 'WAF Award',              description: 'The Lakeshore Cultural Centre wins the WAF Completed Buildings Award in the Cultural category.' },
    { year: 2021, title: 'Tokyo Studio Opens',     description: 'Established a satellite studio in Shibuya to support growing practice in Asia-Pacific.' },
    { year: 2023, title: 'Dezeen Award',           description: 'Casa Serena wins Dezeen Award for Architecture — Residential category.' },
  ],
  awards: [
    { year: 2023, title: 'Dezeen Award — Residential Architecture', body: 'Dezeen'                          },
    { year: 2022, title: 'AIA National Honor Award',                body: 'American Institute of Architects' },
    { year: 2021, title: 'AR House Award',                          body: 'The Architectural Review'         },
    { year: 2019, title: 'WAF Completed Buildings Award',           body: 'World Architecture Festival'      },
    { year: 2016, title: 'Wallpaper* Design Award',                 body: 'Wallpaper Magazine'               },
  ],
}
