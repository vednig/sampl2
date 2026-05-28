import type { JournalPost } from '../src/types/content'

export const journalPosts: JournalPost[] = [
  {
    id:         'j1',
    title:      'On the Ethics of Demolition',
    slug:       'on-the-ethics-of-demolition',
    date:       '2024-03-12',
    category:   'Essay',
    excerpt:    'Before we build, we often destroy. The act of demolition is architectural in itself — it requires the same precision, the same intention, and the same moral weight as the act of construction.',
    readTime:   8,
    author:     'Elena Marchetti',
    coverImage: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1200',
    content: [
      { type: 'paragraph', text: 'Before we build, we often destroy. The act of demolition is architectural in itself — it requires the same precision, the same intention, and the same moral weight as the act of construction. Yet we rarely speak of it with the same care.' },
      { type: 'paragraph', text: 'When we received the commission for the Loom House, the site held the ruins of a nineteenth-century textile mill. Two schools of thought immediately presented themselves: clear the site entirely and build without the burden of history, or treat the ruin as the generative condition of the new building. We chose the latter.' },
      { type: 'heading',   text: 'What We Owe the Past', level: 2 },
      { type: 'paragraph', text: 'Every building that exists is a negotiation between what was and what might be. The act of preservation is easy to romanticize; the act of erasure is easy to condemn. But the more honest position is somewhere between those poles — a rigorous assessment of what a place has been, what it means, and what it might become.' },
      { type: 'quote',     text: 'Architecture is not the art of building, but the art of making places that outlast their makers.', attribution: 'Juhani Pallasmaa' },
      { type: 'paragraph', text: 'At the Loom House, we made a rule: nothing structural from the original mill would be touched. The brick shell was stabilized and preserved as a ruin — deliberately incomplete, deliberately legible as something that had survived damage. Into this shell, we inserted a new structure that touches the ground on its own terms.' },
      { type: 'image',     url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200', alt: 'Loom House exterior', caption: 'The preserved brick shell frames the new glass intervention.' },
    ],
  },
  {
    id:         'j2',
    title:      'Material Honesty: A Conversation with Stone',
    slug:       'material-honesty-stone',
    date:       '2024-01-28',
    category:   'Materials',
    excerpt:    'Stone does not lie. Every quarry mark, every fossil impression, every vein of mineral deposit tells the true age and origin of the material. Working with stone forces an architecture of authenticity.',
    readTime:   6,
    author:     'Elena Marchetti',
    coverImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200',
    content: [
      { type: 'paragraph', text: 'Stone does not lie. Every quarry mark, every fossil impression, every vein of mineral deposit tells the true age and origin of the material. Working with stone forces an architecture of authenticity.' },
      { type: 'paragraph', text: 'For Casa Serena, we traveled to three quarries in the Campania region before selecting the travertine that would clad the main body of the house. The choice was not primarily aesthetic. It was geological — we wanted a stone that bore visible evidence of its formation.' },
      { type: 'heading',   text: 'The Quarry as Design Studio', level: 2 },
      { type: 'paragraph', text: 'We have developed a practice of visiting quarries early in the design process — not to select material from a catalog, but to understand the logic of the stone. Where does it want to be cut? What dimensions come naturally from the seam structure? These questions shape the architecture as much as any plan drawing.' },
    ],
  },
  {
    id:         'j3',
    title:      'The Japanese Concept of Ma in Western Architecture',
    slug:       'concept-of-ma',
    date:       '2023-11-15',
    category:   'Thinking',
    excerpt:    'Ma is often translated as "negative space" — but this translation misses the point. Ma is not the absence of something; it is the presence of a pause, a breath, an interval that gives meaning to what surrounds it.',
    readTime:   7,
    author:     'Yuki Tanaka',
    coverImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
    content: [
      { type: 'paragraph', text: 'Ma is often translated as "negative space" — but this translation misses the point. Ma is not the absence of something; it is the presence of a pause, a breath, an interval that gives meaning to what surrounds it.' },
      { type: 'paragraph', text: 'In designing Kōan Tower, the concept of ma guided our approach to the atrium. Rather than filling the ground level with program, we carved out a compressed entry sequence that suddenly releases into a triple-height void. The compression is the pause; the release is its meaning.' },
    ],
  },
  {
    id:         'j4',
    title:      'Designing for the Climate Emergency',
    slug:       'designing-for-climate-emergency',
    date:       '2023-09-04',
    category:   'Sustainability',
    excerpt:    'The climate emergency is not a constraint on architecture. It is the most significant design brief of our time. The question is not how to accommodate sustainability — it is how sustainability becomes the architecture.',
    readTime:   9,
    author:     'James Okafor',
    coverImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200',
    content: [
      { type: 'paragraph', text: 'The climate emergency is not a constraint on architecture. It is the most significant design brief of our time. The question is not how to accommodate sustainability — it is how sustainability becomes the architecture.' },
      { type: 'paragraph', text: 'We are done with the model of sustainability as afterthought — solar panels bolted to a roof, green roofs applied to a podium, a LEED checklist completed after the design is fixed. Genuine climate architecture begins with orientation, with a commitment to the local, the material-light, the long-lived.' },
    ],
  },
]

export const getPostBySlug = (slug: string): JournalPost | undefined =>
  journalPosts.find((p) => p.slug === slug)

export const getRecentPosts = (count = 3): JournalPost[] =>
  [...journalPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
